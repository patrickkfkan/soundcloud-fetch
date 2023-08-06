import SoundCloud from '../SoundCloud.js';
import PlaylistBase from './PlaylistBase.js';

export default class SystemPlaylist extends PlaylistBase {

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

  #isPublic() {
    return this.getJSON('is_public');
  }

  #getApiInfo() {
    return this.lazyGet('api', () => {
      return {
        urn: this.getJSON('urn'),
        queryUrn: this.getJSON('query_urn')
      };
    });
  }

  #getArtwork() {
    return {
      original: this.getImageUrls(this.getJSON('artwork_url')),
      calculated: this.getImageUrls(this.getJSON('calculated_artwork_url'))
    };
  }

  #getMadeFor() {
    return this.getJSON('made_for');
  }

  #getLastUpdated() {
    return this.getJSON('last_updated');
  }

  #getTexts() {
    return this.lazyGet('texts', () => {
      return {
        title: {
          full: this.getJSON('title'),
          short: this.getJSON('short_title')
        },
        description: {
          full: this.getJSON('description'),
          short: this.getJSON('short_description')
        }
      };
    });
  }

  #getTrackCount() {
    const tracks = this.getJSON('tracks');
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
