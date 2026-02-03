import type SoundCloud from '../SoundCloud.js';
import { type ArtworkImageUrls } from './Entity.js';
import Set from './Set.js';
import User from './User.js';

export default class SystemPlaylist extends Set<string> {

  static type = 'SystemPlaylist';

  isPublic?: boolean;
  playlistType?: 'artistStation' | 'playlist' | string | null;
  apiInfo: {
    urn?: string | null;
    queryUrn?: string | null;
  };
  artwork: {
    original?: ArtworkImageUrls;
    calculated?: ArtworkImageUrls;
  };
  madeFor?: User;
  lastUpdated?: string | null;
  texts: {
    title: {
      full?: string | null;
      short?: string | null;
    },
    description: {
      full?: string | null;
      short?: string | null;
    }
  };
  trackCount: number;

  constructor(json: any, client: SoundCloud) {
    super(json, client);

    this.isPublic = this.getJSON<boolean>('is_public');

    const playlistType = this.getJSON<string>('playlist_type');
    if (playlistType === null) {
      this.playlistType = null;
    }
    else if (playlistType === 'ARTIST_STATION') {
      this.playlistType = 'artistStation';
    }
    else if (playlistType === 'PLAYLIST') {
      this.playlistType = 'playlist';
    }
    else {
      this.playlistType = playlistType?.toString();
    }

    this.apiInfo = {
      urn: this.getJSON<string>('urn'),
      queryUrn: this.getJSON<string>('query_urn')
    };

    const artworkType = this.playlistType === 'artistStation' ? 'artistStation' : 'artwork';
    this.artwork = {
      original: this.getImageUrls(this.getJSON<string>('artwork_url'), artworkType),
      calculated: this.getImageUrls(this.getJSON<string>('calculated_artwork_url'), artworkType)
    };

    const userData = this.getJSON<any>('made_for');
    if (userData) {
      this.madeFor = new User(userData, this.getClient());
    }

    this.lastUpdated = this.getJSON<string>('last_updated');
    this.texts = {
      title: {
        full: this.getJSON<string>('title'),
        short: this.getJSON<string>('short_title')
      },
      description: {
        full: this.getJSON<string>('description'),
        short: this.getJSON<string>('short_description')
      }
    };

    const tracks = this.getJSON<any>('tracks');
    if (Array.isArray(tracks)) {
      this.trackCount = tracks.length;
    }
    else {
      this.trackCount = 0;
    }
  }

  protected getFullPlaylist() {
    if (this.id) {
      return this.getClient().getSystemPlaylist(this.id);
    }
    return Promise.resolve(null);
  }
}
