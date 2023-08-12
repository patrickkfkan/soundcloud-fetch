import SoundCloud from '../SoundCloud.js';
import Playlist from './Playlist.js';

export default class Album extends Playlist {

  static type = 'Album';

  sharingData: {
    shareability?: string | null;
    embeddableBy?: string | null;
    secretToken?: string | null;
  };
  dates: {
    created?: string | null;
    published?: string | null;
    modified?: string | null;
    display?: string | null;
    release?: string | null;
  };
  genre?: string | null;
  label?: string | null;
  license?: string | null;
  purchaseData: {
    title?: string | null;
    url?: string | null;
  };
  tags?: string | null;

  constructor(json: any, client: SoundCloud) {
    super(json, client);

    this.sharingData = {
      shareability: this.getJSON<string>('sharing'),
      embeddableBy: this.getJSON<string>('embeddable_by'),
      secretToken: this.getJSON<string>('secret_token')
    };

    this.dates = {
      created: this.getJSON<string>('created_at'),
      published: this.getJSON<string>('published_at'),
      modified: this.getJSON<string>('last_modified'),
      display: this.getJSON<string>('display_date'),
      release: this.getJSON<string>('release_date')
    };

    this.genre = this.getJSON<string>('genre');
    this.label = this.getJSON<string>('label_name');
    this.license = this.getJSON<string>('license');

    this.purchaseData = {
      title: this.getJSON<string>('purchase_title'),
      url: this.getJSON<string>('purchase_url')
    };

    this.tags = this.getJSON<string>('tag_list');
  }
}
