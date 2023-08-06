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
        shareability: this.getJSON('sharing'),
        embeddableBy: this.getJSON('embeddable_by'),
        secretToken: this.getJSON('secret_token')
      };
    });
  }

  protected getDates() {
    return this.lazyGet('dates', () => {
      return {
        created: this.getJSON('created_at'),
        published: this.getJSON('published_at'),
        modified: this.getJSON('last_modified'),
        display: this.getJSON('display_date'),
        release: this.getJSON('release_date')
      };
    });
  }

  #getGenre() {
    return this.getJSON('genre');
  }

  #getLabel() {
    return this.getJSON('label_name');
  }

  #getLicense() {
    return this.getJSON('license');
  }

  #getPurchaseData() {
    return this.lazyGet('purchase', () => {
      return {
        title: this.getJSON('purchase_title'),
        url: this.getJSON('purchase_url')
      };
    });
  }

  #getTags() {
    return this.getJSON('tag_list');
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
