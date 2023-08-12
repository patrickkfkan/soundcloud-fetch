import SoundCloud from '../SoundCloud.js';
import { ArtworkImageUrls } from './Entity.js';
import Set from './Set.js';

export default class Playlist extends Set<number> {

  static type = 'Playlist';

  isPublic?: boolean;
  apiInfo: {
    uri?: string | null;
  };
  artwork?: ArtworkImageUrls;
  setType?: string | null;
  duration?: number;
  dates: {
    created?: string | null;
    published?: string | null;
    modified?: string | null;
    display?: string | null;
  };
  sharingData: {
    shareability?: string | null;
    secretToken?: string | null;
  };
  texts: {
    title?: string | null;
    description?: string | null;
  };
  trackCount?: number;
  socialData: {
    likesCount?: number;
    repostsCount?: number;
    managedByFeeds?: boolean;
  };

  constructor(json: any, client: SoundCloud) {
    super(json, client);

    this.isPublic = this.getJSON<boolean>('public');

    this.apiInfo = {
      uri: this.getJSON<string>('uri')
    };

    this.artwork = this.getImageUrls(this.getJSON<string>('artwork_url'));
    this.setType = this.getJSON<string>('set_type');
    this.duration = this.getJSON<number>('duration');

    this.dates = {
      created: this.getJSON<string>('created_at'),
      published: this.getJSON<string>('published_at'),
      modified: this.getJSON<string>('last_modified'),
      display: this.getJSON<string>('display_date')
    };

    this.sharingData = {
      shareability: this.getJSON<string>('sharing'),
      secretToken: this.getJSON<string>('secret_token')
    };

    this.texts = {
      title: this.getJSON<string>('title'),
      description: this.getJSON<string>('description')
    };

    this.trackCount = this.getJSON<number>('track_count');

    this.socialData = {
      likesCount: this.getJSON<number>('likes_count'),
      repostsCount: this.getJSON<number>('reposts_count'),
      managedByFeeds: this.getJSON<boolean>('managed_by_feeds')
    };
  }

  protected getFullPlaylist() {
    if (this.id) {
      return this.getClient().getPlaylistOrAlbum(this.id);
    }
    return Promise.resolve(null);
  }
}
