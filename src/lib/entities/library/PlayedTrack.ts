import SoundCloud from '../../SoundCloud.js';
import Track from '../Track.js';
import PlayedEntity from './PlayedEntity.js';

export default class PlayedTrack extends PlayedEntity<Track> {

  constructor(json: any, client: SoundCloud) {
    super(json, client);

    Object.defineProperties(this, {
      trackId: {
        enumerable: true,
        get() {
          return this.#getTrackId();
        }
      }
    });
  }

  protected getType() {
    return 'played-track';
  }

  #getTrackId() {
    return this.getJSON<number>('track_id');
  }

  protected getItem(): Track | null {
    return this.lazyGet('item', () => {
      const trackData = this.getJSON<any>('track');
      if (trackData) {
        return new Track(trackData, this.getClient());
      }

      return null;
    }) || null;
  }

  get trackId() {
    return this.#getTrackId();
  }
}
