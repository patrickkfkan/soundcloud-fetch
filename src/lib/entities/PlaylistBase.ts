import SoundCloud from '../SoundCloud.js';
import Entity from './Entity.js';
import Track from './Track.js';
import User from './User.js';

export default abstract class PlaylistBase extends Entity {

  constructor(json: any, client: SoundCloud) {
    super(json, client);

    Object.defineProperties(this, {
      id: {
        enumerable: true,
        get() {
          return this.#getId();
        }
      },
      user: {
        enumerable: true,
        get() {
          return this.#getUser();
        }
      },
      permalink: {
        enumerable: true,
        get() {
          return this.#getPermalink();
        }
      }
    });
  }

  #getId() {
    return this.getJSON('id');
  }

  #getUser() {
    return this.lazyGet('user', () => new User(this.getJSON('user'), this.getClient()));
  }

  #getPermalink() {
    return {
      basic: this.getJSON('permalink'),
      full: this.getJSON('permalink_url')
    };
  }

  get id() {
    return this.#getId();
  }

  get user() {
    return this.#getUser();
  }

  get permalink() {
    return this.#getPermalink();
  }

  async getTracks(options?: { offset: number, limit: number }) {
    const offset = options?.offset || 0;
    let keySuffix = `_${offset}`;
    if (options?.limit) {
      keySuffix += `-${offset + options.limit}`;
    }
    return this.lazyGetAsync(`tracks${keySuffix}`, async () => {
      let trackIds = await this.#getTrackIds();
      if (options?.limit) {
        trackIds = trackIds.slice(offset, options.limit + offset);
      }
      else if (offset) {
        trackIds = trackIds.slice(offset);
      }
      const tracks = await this.getClient().getTracks(trackIds);
      // Tracks do not appear in the same order as trackIds, so
      // We need to sort them ourselves
      const orderedTracks: Track[] = [];
      tracks.forEach((track) => {
        const trackIndex = trackIds.indexOf(track.id);
        if (trackIndex >= 0) {
          orderedTracks[trackIndex] = track;
        }
      });
      // Make sure there are no 'gaps' in the array
      return orderedTracks.filter((t) => t !== undefined);
      return orderedTracks;
    });
  }

  async #getTrackIds() {
    return this.lazyGetAsync('trackIds', async () => {
      // Check if we already have tracks in JSON data.
      // If not, we need to refetch the playlist with full
      // Representation
      const tracks = this.getJSON('tracks');
      if (Array.isArray(tracks)) {
        return tracks.map((track) => track.id);
      }

      const fullPlaylist = await this.getClient().getPlaylist(this.id);
      const plTracks = fullPlaylist?.getJSON('tracks');
      if (Array.isArray(plTracks)) {
        return plTracks.map((track) => track.id);
      }

      return [];
    });
  }
}
