import EntityBuilder from '../../utils/EntityBuilder.js';
import Album from '../Album.js';
import Playlist from '../Playlist.js';
import SystemPlaylist from '../SystemPlaylist.js';
import PlayedEntity from './PlayedEntity.js';

export default class PlayedSet extends PlayedEntity<Album | Playlist | SystemPlaylist> {

  protected getType() {
    return 'played-set';
  }

  protected getItem(): Album | Playlist | SystemPlaylist | null {
    return this.lazyGet('set', () => {
      const plData = this.getJSON<any>('system_playlist') || this.getJSON<any>('playlist');
      if (plData) {
        return EntityBuilder.build(plData, this.getClient(), [ Album, Playlist, SystemPlaylist ]);
      }
      return null;
    }) || null;
  }
}
