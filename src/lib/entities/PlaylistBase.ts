import SoundCloud, { SoundCloudPageOptions } from '../SoundCloud.js';
import Entity from './Entity.js';
import Track from './Track.js';
import User from './User.js';

export default abstract class PlaylistBase<ID extends string | number> extends Entity {

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
    return this.getJSON<ID>('id');
  }

  #getUser() {
    return this.lazyGet('user', () => {
      const userData = this.getJSON<any>('user');
      if (!userData) {
        return undefined;
      }
      return new User(userData, this.getClient());
    });
  }

  #getPermalink() {
    return this.lazyGet('permalink', () => {
      return {
        basic: this.getJSON<string>('permalink'),
        full: this.getJSON<string>('permalink_url')
      };
    });
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

  async getTracks(options?: SoundCloudPageOptions) {
    const offset = Number(options?.offset) || 0;
    let keySuffix = `_${offset}`;
    if (options?.limit) {
      keySuffix += `-${offset + options.limit}`;
    }
    return this.lazyGetAsync(`tracks${keySuffix}`, async () => {
      const trackIds = await this.#getTrackIds();
      if (trackIds) {
        let useIds = trackIds;
        if (options?.limit) {
          useIds = trackIds.slice(offset, options.limit + offset);
        }
        else if (offset) {
          useIds = trackIds.slice(offset);
        }
        const tracks = await this.getClient().getTracks(trackIds);
        // Tracks do not appear in the same order as trackIds, so
        // We need to sort them ourselves
        const orderedTracks: Track[] = [];
        tracks.forEach((track) => {
          const trackIndex = useIds.indexOf(track.id);
          if (trackIndex >= 0) {
            orderedTracks[trackIndex] = track;
          }
        });
        // Make sure there are no 'gaps' in the array
        return orderedTracks.filter((t) => t);
      }
    });
  }

  async #getTrackIds() {
    return this.lazyGetAsync('trackIds', async () => {
      // Check if we already have tracks in JSON data.
      // If not, we need to refetch the playlist with full
      // Representation
      const tracks = this.getJSON<any>('tracks');
      if (Array.isArray(tracks)) {
        return tracks.map((track) => track.id);
      }

      const fullPlaylist = await this.getFullPlaylist();
      const plTracks = fullPlaylist?.getJSON<any>('tracks');
      if (Array.isArray(plTracks)) {
        return plTracks.map((track) => track.id);
      }

      return [];
    });
  }

  protected abstract getFullPlaylist(): Promise<PlaylistBase<string | number> | null>;
}
