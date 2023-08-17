import SoundCloud from '../SoundCloud.js';
import Entity from './Entity.js';
import Track from './Track.js';
import User from './User.js';

type TracksCacheKey = `tracks.${number}` | `tracks.${number}.${number}`;

export default abstract class Set<ID extends string | number> extends Entity {

  id?: ID;
  user?: User;
  permalink: {
    basic?: string | null;
    full?: string | null;
  };

  #cache: {
    trackIds?: number[];
  } & {
    [k: TracksCacheKey]: Track[]
  };

  constructor(json: any, client: SoundCloud) {
    super(json, client);

    this.id = this.getJSON<ID>('id');

    const userData = this.getJSON<any>('user');
    if (userData) {
      this.user = new User(userData, this.getClient());
    }

    this.permalink = {
      basic: this.getJSON<string>('permalink'),
      full: this.getJSON<string>('permalink_url')
    };

    this.#cache = {};
  }

  async getTracks(options?: { offset?: number; limit?: number; }) {
    const offset = options?.offset || 0;
    const limit = options?.limit;
    const cacheKey: TracksCacheKey = limit ?
      `tracks.${offset}.${limit}` : `tracks.${offset}`;

    if (this.#cache[cacheKey]) {
      return this.#cache[cacheKey];
    }

    const trackIds = await this.#getTrackIds();
    let result: Track[] | null = null;
    if (trackIds && trackIds.length > 0) {
      let useIds = trackIds;
      if (limit) {
        useIds = trackIds.slice(offset, limit + offset);
      }
      else if (offset) {
        useIds = trackIds.slice(offset);
      }
      const tracks = await this.getClient().getTracks(trackIds);
      // Tracks do not appear in the same order as trackIds, so
      // We need to sort them ourselves
      const orderedTracks: Track[] = [];
      tracks.forEach((track) => {
        if (track.id !== undefined) {
          const trackIndex = useIds.indexOf(track.id);
          if (trackIndex >= 0) {
            orderedTracks[trackIndex] = track;
          }
        }
      });
      // Make sure there are no 'gaps' in the array
      result = orderedTracks.filter((t) => t);
    }

    this.#cache[cacheKey] = result || [];
    return this.#cache[cacheKey];
  }

  async #getTrackIds() {
    if (this.#cache.trackIds) {
      return this.#cache.trackIds;
    }

    let trackIds: number[] | null = null;

    // Check if we already have tracks in JSON data.
    // If not, we need to refetch the playlist with full
    // Representation
    const tracks = this.getJSON<any>('tracks');
    if (Array.isArray(tracks)) {
      trackIds = tracks.map((track) => track.id);
    }

    if (!trackIds) {
      const fullPlaylist = await this.getFullPlaylist();
      const plTracks = fullPlaylist?.getJSON<any>('tracks');
      if (Array.isArray(plTracks)) {
        trackIds = plTracks.map((track) => track.id);
      }
    }

    this.#cache.trackIds = trackIds || [];
    return this.#cache.trackIds;
  }

  protected abstract getFullPlaylist(): Promise<Set<string | number> | null>;
}
