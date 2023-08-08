import SoundCloud from '../SoundCloud.js';
import PlaylistBase from './PlaylistBase.js';

export default class Playlist extends PlaylistBase<number> {

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
      setType: {
        enumerable: true,
        get() {
          return this.#getSetType();
        }
      },
      duration: {
        enumerable: true,
        get() {
          return this.#getDuration();
        }
      },
      dates: {
        enumerable: true,
        get() {
          return this.getDates();
        }
      },
      sharingData: {
        enumerable: true,
        get() {
          return this.getSharingData();
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
      },
      socialData: {
        enumerable: true,
        get() {
          return this.#getSocialData();
        }
      }
    });
  }

  protected getType() {
    return 'playlist';
  }

  #isPublic() {
    return this.getJSON<boolean>('public');
  }

  #getApiInfo() {
    return this.lazyGet('api', () => {
      return {
        uri: this.getJSON<string>('uri')
      };
    });
  }

  #getArtwork() {
    return this.getImageUrls(this.getJSON<string>('artwork_url'));
  }

  #getSetType() {
    return this.getJSON<string>('set_type');
  }

  #getDuration() {
    return this.getJSON<number>('duration');
  }

  protected getDates() {
    return this.lazyGet('dates', () => {
      return {
        created: this.getJSON<string>('created_at'),
        published: this.getJSON<string>('published_at'),
        modified: this.getJSON<string>('last_modified'),
        display: this.getJSON<string>('display_date')
      };
    });
  }

  protected getSharingData() {
    return this.lazyGet('sharing', () => {
      return {
        shareability: this.getJSON<string>('sharing'),
        secretToken: this.getJSON<string>('secret_token')
      };
    });
  }

  protected getFullPlaylist() {
    if (this.id) {
      return this.getClient().getPlaylist(this.id);
    }
    return Promise.resolve(null);
  }

  #getTexts() {
    return this.lazyGet('texts', () => {
      return {
        title: this.getJSON<string>('title'),
        description: this.getJSON<string>('description')
      };
    });
  }

  #getTrackCount() {
    return this.getJSON<number>('track_count');
  }

  #getSocialData() {
    return this.lazyGet('social', () => {
      return {
        likesCount: this.getJSON<number>('likes_count'),
        repostsCount: this.getJSON<number>('reposts_count'),
        managedByFeeds: this.getJSON<boolean>('managed_by_feeds')
      };
    });
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

  get setType() {
    return this.#getSetType();
  }

  get duration() {
    return this.#getDuration();
  }

  get dates() {
    return this.getDates();
  }

  get sharingData() {
    return this.getSharingData();
  }

  get texts() {
    return this.#getTexts();
  }

  get trackCount() {
    return this.#getTrackCount();
  }

  get socialData() {
    return this.#getSocialData();
  }
}
