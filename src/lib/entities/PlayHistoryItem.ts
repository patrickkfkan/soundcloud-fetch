import type SoundCloud from '../SoundCloud.js';
import EntityBuilder from '../utils/EntityBuilder.js';
import Album from './Album.js';
import Entity from './Entity.js';
import Playlist from './Playlist.js';
import SystemPlaylist from './SystemPlaylist.js';
import Track from './Track.js';

export default class PlayHistoryItem extends Entity {

  static type = 'PlayHistoryItem';

  playedAt?: number;
  item: Album | Playlist | SystemPlaylist | Track | null;

  constructor(json: any, client: SoundCloud) {
    super(json, client);

    this.playedAt = this.getJSON<number>('played_at');
    this.item = this.#getItem();
  }

  #getItem(): Album | Playlist | SystemPlaylist | Track | null {
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
}
