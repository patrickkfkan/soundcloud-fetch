import SoundCloud from '../../SoundCloud.js';
import EntityBuilder from '../../utils/EntityBuilder.js';
import Album from '../Album.js';
import Entity from '../Entity.js';
import Playlist from '../Playlist.js';
import SystemPlaylist from '../SystemPlaylist.js';
import Track from '../Track.js';

export default class HistoryItem extends Entity {

  constructor(json: any, client: SoundCloud) {
    super(json, client);

    Object.defineProperties(this, {
      playedAt: {
        enumerable: true,
        get() {
          return this.#getPlayedAt();
        }
      },
      item: {
        enumerable: true,
        get() {
          return this.getItem();
        }
      }
    });
  }

  protected getType(): string {
    return 'history-item';
  }

  protected getItem(): Album | Playlist | SystemPlaylist | Track | null {
    const plData = this.getJSON<any>('system_playlist') || this.getJSON<any>('playlist');
    if (plData) {
      return EntityBuilder.build(plData, this.getClient(), [ Album, Playlist, SystemPlaylist ]);
    }
    const trackData = this.getJSON<any>('track');
    if (trackData) {
      return EntityBuilder.build(trackData, this.getClient(), Track);
    }
    return null;
  }

  #getPlayedAt() {
    return this.getJSON<number>('played_at');
  }

  get playedAt() {
    return this.#getPlayedAt();
  }

  get item() {
    return this.getItem();
  }
}
