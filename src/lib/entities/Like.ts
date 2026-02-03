import type SoundCloud from '../SoundCloud.js';
import EntityBuilder from '../utils/EntityBuilder.js';
import Album from './Album.js';
import Entity from './Entity.js';
import Playlist from './Playlist.js';
import Track from './Track.js';

export default class Like extends Entity {

  static type = 'Like';

  itemType: 'Track' | 'Playlist' | 'Album' | null;
  createdAt?: string | null;
  item: Track | Album | Playlist | null;

  constructor(json: any, client: SoundCloud) {
    super(json, client);

    this.createdAt = this.getJSON<string>('created_at');

    const { itemType, item } = this.#buildTrack() || this.#buildPlaylist() || {};
    this.itemType = itemType || null;
    this.item = item || null;
  }

  #buildTrack(): { itemType: Like['itemType']; item: Like['item'] } | null {
    const trackData = this.getJSON<any>('track');
    if (trackData) {
      const item = EntityBuilder.build(trackData, this.getClient(), Track);
      if (item) {
        return {
          itemType: 'Track',
          item
        };
      }
    }
    return null;
  }

  #buildPlaylist(): { itemType: Like['itemType']; item: Like['item'] } | null {
    const playlistData = this.getJSON<any>('playlist');
    if (playlistData) {
      const item = EntityBuilder.build(playlistData, this.getClient(), [ Album, Playlist ]);
      if (item) {
        return {
          itemType: item instanceof Album ? 'Album' : 'Playlist',
          item
        };
      }
    }
    return null;
  }
}
