import type SoundCloud from '../SoundCloud.js';
import EntityBuilder from '../utils/EntityBuilder.js';
import Album from './Album.js';
import Entity from './Entity.js';
import Playlist from './Playlist.js';
import SystemPlaylist from './SystemPlaylist.js';

export default class LibraryItem extends Entity {

  static type = 'LibraryItem';

  itemType: 'Playlist' | 'PlaylistLike' | 'Album' | 'AlbumLike' | 'SystemPlaylistLike' | null;
  createdAt?: number;
  item: Album | Playlist | SystemPlaylist | null;

  constructor(json: any, client: SoundCloud) {
    super(json, client);

    this.createdAt = this.getJSON<number>('created_at');

    const type = this.getJSON<string>('type');
    const isLike = type && type.endsWith('-like');
    switch (type) {
      case 'playlist':
      case 'playlist-like':
        this.item = this.#buildPlaylistOrAlbum();
        break;
      case 'system-playlist-like':
        this.item = this.#buildSystemPlaylist();
        break;
      default:
        this.item = null;
    }

    if (this.item instanceof Album) {
      this.itemType = isLike ? 'AlbumLike' : 'Album';
    }
    else if (this.item instanceof SystemPlaylist) {
      this.itemType = 'SystemPlaylistLike';
    }
    else if (this.item instanceof Playlist) {
      this.itemType = isLike ? 'PlaylistLike' : 'Playlist';
    }
    else {
      this.itemType = null;
    }
  }

  #buildPlaylistOrAlbum(): Playlist | Album | null {
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
}
