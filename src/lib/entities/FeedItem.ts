import type SoundCloud from '../SoundCloud.js';
import EntityBuilder from '../utils/EntityBuilder.js';
import Album from './Album.js';
import Entity from './Entity.js';
import Playlist from './Playlist.js';
import Track from './Track.js';
import User from './User.js';

export type FeedActivityType = 'TrackPost' | 'TrackRepost' | 'PlaylistPost';

export default class FeedItem extends Entity {

  static type = 'FeedItem';

  activityType: FeedActivityType | null;
  creator?: User | null;
  createdAt?: number;
  item: Track | Playlist | Album | null;

  constructor(json: any, client: SoundCloud) {
    super(json, client);

    this.creator = this.#buildUser();
    this.createdAt = this.getJSON<number>('created_at');

    const type = this.getJSON<string>('type');
    switch (type) {
      case 'track':
        this.activityType = 'TrackPost';
        this.item = this.#buildTrack();
        break;
      case 'track-repost':
        this.activityType = 'TrackRepost';
        this.item = this.#buildTrack();
        break;
      case 'playlist':
        this.activityType = 'PlaylistPost';
        this.item = this.#buildPlaylistOrAlbum();
        break;
      default:
        this.item = null;
    }
  }

  #buildPlaylistOrAlbum(): Playlist | Album | null {
    const data = this.getJSON<any>('playlist');
    if (data?.is_album) {
      return EntityBuilder.build(data, this.getClient(), Album);
    }
    return data ? EntityBuilder.build(data, this.getClient(), Playlist) : null;
  }

  #buildTrack() {
    const data = this.getJSON<any>('track');
    return data ? EntityBuilder.build(data, this.getClient(), Track) : null;
  }

  #buildUser() {
    const data = this.getJSON<any>('user');
    return data ? EntityBuilder.build(data, this.getClient(), User) : null;
  }
}
