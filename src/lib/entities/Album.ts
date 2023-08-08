import SoundCloud from '../SoundCloud.js';
import Playlist from './Playlist.js';

export default class Album extends Playlist {

  constructor(json: any, client: SoundCloud) {
    super(json, client);

    Object.defineProperties(this, {
      genre: {
        enumerable: true,
        get() {
          return this.#getGenre();
        }
      },
      label: {
        enumerable: true,
        get() {
          return this.#getLabel();
        }
      },
      license: {
        enumerable: true,
        get() {
          return this.#getLicense();
        }
      },
      purchaseData: {
        enumerable: true,
        get() {
          return this.#getPurchaseData();
        }
      },
      tags: {
        enumerable: true,
        get() {
          return this.#getTags();
        }
      }
    });
  }

  protected getType() {
    return 'album';
  }

  protected getSharingData() {
    return this.lazyGet('sharing', () => {
      return {
        shareability: this.getJSON<string>('sharing'),
        embeddableBy: this.getJSON<String>('embeddable_by'),
        secretToken: this.getJSON<string>('secret_token')
      };
    });
  }

  protected getFullPlaylist() {
    if (this.id) {
      return this.getClient().getAlbum(this.id);
    }
    return Promise.resolve(null);
  }

  protected getDates() {
    return this.lazyGet('dates', () => {
      return {
        created: this.getJSON<string>('created_at'),
        published: this.getJSON<string>('published_at'),
        modified: this.getJSON<string>('last_modified'),
        display: this.getJSON<string>('display_date'),
        release: this.getJSON<string>('release_date')
      };
    });
  }

  #getGenre() {
    return this.getJSON<string>('genre');
  }

  #getLabel() {
    return this.getJSON<string>('label_name');
  }

  #getLicense() {
    return this.getJSON<string>('license');
  }

  #getPurchaseData() {
    return this.lazyGet('purchase', () => {
      return {
        title: this.getJSON<string>('purchase_title'),
        url: this.getJSON<string>('purchase_url')
      };
    });
  }

  #getTags() {
    return this.getJSON<string>('tag_list');
  }

  get genre() {
    return this.#getGenre();
  }

  get label() {
    return this.#getLabel();
  }

  get license() {
    return this.#getLicense();
  }

  get purchaseData() {
    return this.#getPurchaseData();
  }

  get tags() {
    return this.#getTags();
  }
}
