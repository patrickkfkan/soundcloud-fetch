import SoundCloud from '../../SoundCloud.js';
import EntityBuilder from '../../utils/EntityBuilder.js';
import Album from '../Album.js';
import Entity from '../Entity.js';
import Playlist from '../Playlist.js';
import SystemPlaylist from '../SystemPlaylist.js';

export default class LibraryItem extends Entity {

  constructor(json: any, client: SoundCloud) {
    super(json, client);

    Object.defineProperties(this, {
      createdAt: {
        enumerable: true,
        get() {
          return this.#getCreatedAt();
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

  getType() {
    return this.getJSON<string>('type') || 'unknown-library-item';
  }

  protected getItem(): Album | Playlist | SystemPlaylist | null {
    return this.lazyGet('item', () => {
      const type = this.getType();
      switch (type) {
        case 'playlist':
        case 'playlist-like':
          return this.#buildPlaylistOrAlbum();
        case 'system-playlist-like':
          return this.#buildSystemPlaylist();
        default:
          return null;
      }
    }) || null;
  }

  #buildPlaylistOrAlbum() {
    const data = this.getJSON<any>('playlist');
    if (data?.is_album) {
      return EntityBuilder.build(data, this.getClient(), Album);
    }
    return data ? EntityBuilder.build(data, this.getClient(), Playlist) : null;
  }

  #buildSystemPlaylist() {
    const data = this.getJSON<any>('system_playlist');
    return data ? EntityBuilder.build(data, this.getClient(), SystemPlaylist) : null;
  }

  #getCreatedAt() {
    return this.getJSON<number>('created_at');
  }

  get createdAt() {
    return this.#getCreatedAt();
  }

  get item() {
    return this.getItem();
  }
}
