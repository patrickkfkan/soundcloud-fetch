import SoundCloud from '../SoundCloud.js';
import Entity from './Entity.js';

export default class Publisher extends Entity {

  constructor(json: any, client: SoundCloud) {
    super(json, client);

    Object.defineProperties(this, {
      id: {
        enumerable: true,
        get() {
          return this.#getId();
        }
      },
      artist: {
        enumerable: true,
        get() {
          return this.#getArtist();
        }
      },
      albumTitle: {
        enumerable: true,
        get() {
          return this.#getAlbumTitle();
        }
      },
      containsMusic: {
        enumerable: true,
        get() {
          return this.#containsMusic();
        }
      },
      UPCOrEAN: {
        enumerable: true,
        get() {
          return this.#getUPCOrEAN();
        }
      },
      ISRC: {
        enumerable: true,
        get() {
          return this.#getISRC();
        }
      },
      isExplicit: {
        enumerable: true,
        get() {
          return this.#isExplicit();
        }
      },
      releaseTitle: {
        enumerable: true,
        get() {
          return this.#getReleaseTitle();
        }
      },
      copyrightText: {
        enumerable: true,
        get() {
          return this.#getCopyrightText();
        }
      },
      apiInfo: {
        enumerable: true,
        get() {
          return this.#getApiInfo();
        }
      }
    });

  }

  protected getType() {
    return 'publisher';
  }

  #getId() {
    return this.getJSON('id');
  }

  #getArtist() {
    return this.getJSON('artist');
  }

  #getAlbumTitle() {
    return this.getJSON('album_title');
  }

  #containsMusic() {
    return this.getJSON('contains_music');
  }

  #getUPCOrEAN() {
    return this.getJSON('upc_or_ean');
  }

  #getISRC() {
    return this.getJSON('isrc');
  }

  #isExplicit() {
    return this.getJSON('explicit');
  }

  #getReleaseTitle() {
    return this.getJSON('release_title');
  }

  #getCopyrightText() {
    return this.lazyGet('copyright', () => {
      return {
        general: {
          p: this.getJSON('p_line'),
          c: this.getJSON('c_line')
        },
        display: {
          p: this.getJSON('p_line_for_display'),
          c: this.getJSON('c_line_for_display')
        }
      };
    });
  }

  #getApiInfo() {
    return this.lazyGet('api', () => {
      return {
        urn: this.getJSON('urn')
      };
    });
  }

  get id() {
    return this.#getId();
  }

  get artist() {
    return this.#getArtist();
  }

  get albumTitle() {
    return this.#getAlbumTitle();
  }

  get containsMusic() {
    return this.#containsMusic();
  }

  get UPCOrEAN() {
    return this.#getUPCOrEAN();
  }

  get ISRC() {
    return this.#getISRC();
  }

  get isExplicit() {
    return this.#isExplicit();
  }

  get releaseTitle() {
    return this.#getReleaseTitle();
  }

  get copyrightText() {
    return this.#getCopyrightText();
  }

  get apiInfo() {
    return this.#getApiInfo();
  }
}
