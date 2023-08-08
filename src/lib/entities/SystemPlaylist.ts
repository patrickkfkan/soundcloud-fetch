import SoundCloud from '../SoundCloud.js';
import PlaylistBase from './PlaylistBase.js';
import User from './User.js';

export default class SystemPlaylist extends PlaylistBase<string> {

  constructor(json: any, client: SoundCloud) {
    super(json, client);

    Object.defineProperties(this, {
      isPublic: {
        enumerable: true,
        get() {
          return this.#isPublic();
        }
      },
      apiInfo: {
        enumerable: true,
        get() {
          return this.#getApiInfo();
        }
      },
      artwork: {
        enumerable: true,
        get() {
          return this.#getArtwork();
        }
      },
      madeFor: {
        enumerable: true,
        get() {
          return this.#getMadeFor();
        }
      },
      lastUpdated: {
        enumerable: true,
        get() {
          return this.#getLastUpdated();
        }
      },
      texts: {
        enumerable: true,
        get() {
          return this.#getTexts();
        }
      },
      trackCount: {
        enumerable: true,
        get() {
          return this.#getTrackCount();
        }
      }
    });
  }

  protected getType() {
    return 'system-playlist';
  }

  protected getFullPlaylist() {
    if (this.id) {
      return this.getClient().getSystemPlaylist(this.id);
    }
    return Promise.resolve(null);
  }

  #isPublic() {
    return this.getJSON<boolean>('is_public');
  }

  #getApiInfo() {
    return this.lazyGet('api', () => {
      return {
        urn: this.getJSON<string>('urn'),
        queryUrn: this.getJSON<string>('query_urn')
      };
    });
  }

  #getArtwork() {
    return this.lazyGet('artwork', () => {
      return {
        original: this.getImageUrls(this.getJSON<string>('artwork_url')),
        calculated: this.getImageUrls(this.getJSON<string>('calculated_artwork_url'))
      };
    });
  }

  #getMadeFor() {
    return this.lazyGet('madeFor', () => {
      const userData = this.getJSON<any>('made_for');
      if (!userData) {
        return undefined;
      }
      return new User(userData, this.getClient());
    });
  }

  #getLastUpdated() {
    return this.getJSON<string>('last_updated');
  }

  #getTexts() {
    return this.lazyGet('texts', () => {
      return {
        title: {
          full: this.getJSON<string>('title'),
          short: this.getJSON<string>('short_title')
        },
        description: {
          full: this.getJSON<string>('description'),
          short: this.getJSON<string>('short_description')
        }
      };
    });
  }

  #getTrackCount() {
    const tracks = this.getJSON<any>('tracks');
    if (Array.isArray(tracks)) {
      return tracks.length;
    }
    return 0;
  }

  get isPublic() {
    return this.#isPublic();
  }

  get apiInfo() {
    return this.#getApiInfo();
  }

  get artwork() {
    return this.#getArtwork();
  }

  get madeFor() {
    return this.#getMadeFor();
  }

  get lastUpdated() {
    return this.#getLastUpdated();
  }

  get texts() {
    return this.#getTexts();
  }

  get trackCount() {
    return this.#getTrackCount();
  }
}
