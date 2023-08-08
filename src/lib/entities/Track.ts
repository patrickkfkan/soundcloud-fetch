import SoundCloud from '../SoundCloud.js';
import Entity from './Entity.js';
import MediaTranscoding from './MediaTranscoding.js';
import Publisher from './Publisher.js';
import User from './User.js';

export default class Track extends Entity {

  constructor(json: any, client: SoundCloud) {
    super(json, client);

    Object.defineProperties(this, {
      id: {
        enumerable: true,
        get() {
          return this.#getId();
        }
      },
      texts: {
        enumerable: true,
        get() {
          return this.#getTexts();
        }
      },
      dates: {
        enumerable: true,
        get() {
          return this.#getDates();
        }
      },
      downloadData: {
        enumerable: true,
        get() {
          return this.#getDownloadData();
        }
      },
      socialData: {
        enumerable: true,
        get() {
          return this.#getSocialData();
        }
      },
      sharingData: {
        enumerable: true,
        get() {
          return this.#getSharingData();
        }
      },
      playbackData: {
        enumerable: true,
        get() {
          return this.#getPlaybackData();
        }
      },
      isBlocked: {
        enumerable: true,
        get() {
          return this.#isBlocked();
        }
      },
      isSnipped: {
        enumerable: true,
        get() {
          return this.#isSnipped();
        }
      },
      mediaInfo: {
        enumerable: true,
        get() {
          return this.#getMediaInfo();
        }
      },
      permalink: {
        enumerable: true,
        get() {
          return this.#getPermalink();
        }
      },
      apiInfo: {
        enumerable: true,
        get() {
          return this.#getApiInfo();
        }
      },
      purchaseInfo: {
        enumerable: true,
        get() {
          return this.#getPurchaseInfo();
        }
      },
      publisher: {
        enumerable: true,
        get() {
          return this.#getPublisher();
        }
      },
      durations: {
        enumerable: true,
        get() {
          return this.#getDurations();
        }
      },
      genre: {
        enumerable: true,
        get() {
          return this.#getGenre();
        }
      },
      license: {
        enumerable: true,
        get() {
          return this.#getLicense();
        }
      },
      isPublic: {
        enumerable: true,
        get() {
          return this.#isPublic();
        }
      },
      tags: {
        enumerable: true,
        get() {
          return this.#getTags();
        }
      },
      label: {
        enumerable: true,
        get() {
          return this.#getLabel();
        }
      },
      artwork: {
        enumerable: true,
        get() {
          return this.#getArtwork();
        }
      },
      waveform: {
        enumerable: true,
        get() {
          return this.#getWaveform();
        }
      },
      user: {
        enumerable: true,
        get() {
          return this.#getUser();
        }
      }
    });
  }

  protected getType() {
    return 'track';
  }

  #getId() {
    return this.getJSON<number>('id');
  }

  #getTexts() {
    return this.lazyGet('texts', () => {
      return {
        title: this.getJSON<string>('title'),
        description: this.getJSON<string>('description'),
        caption: this.getJSON<string>('caption')
      };
    });
  }

  #getDates() {
    return this.lazyGet('dates', () => {
      return {
        created: this.getJSON<string>('created_at'),
        released: this.getJSON<string>('release_date'),
        modified: this.getJSON<string>('last_modified'),
        display: this.getJSON<string>('display_date')
      };
    });
  }

  #getDownloadData() {
    return this.lazyGet('download', () => {
      return {
        downloadable: this.getJSON<boolean>('downloadable'),
        downloadCount: this.getJSON<number>('download_count'),
        hasDownloadsLeft: this.getJSON<number>('has_downloads_left')
      };
    });
  }

  #getSocialData() {
    return this.lazyGet('social', () => {
      return {
        commentable: this.getJSON<boolean>('commentable'),
        commentCount: this.getJSON<number>('comment_count'),
        likesCount: this.getJSON<number>('likes_count'),
        repostsCount: this.getJSON<number>('reposts_count')
      };
    });
  }

  #getSharingData() {
    return this.lazyGet('sharing', () => {
      return {
        shareability: this.getJSON<string>('sharing'),
        embeddableBy: this.getJSON<string>('embeddable_by'),
        secretToken: this.getJSON<string>('secret_token')
      };
    });
  }

  #getPlaybackData() {
    return this.lazyGet('playback', () => {
      return {
        playbackCount: this.getJSON<number>('playback_count'),
        policy: this.getJSON<string>('policy')
      };
    });
  }

  #isBlocked() {
    if (!this.playbackData?.policy) {
      return undefined;
    }
    return this.playbackData.policy === 'BLOCK';
  }

  #isSnipped() {
    if (!this.playbackData?.policy) {
      return undefined;
    }
    return this.playbackData?.policy === 'SNIP';
  }

  #getMediaInfo() {
    return this.lazyGet('media', () => {
      return {
        trackFormat: this.getJSON<string>('track_format'),
        encodingState: this.getJSON<string>('state'),
        transcodings: this.#parseTranscodings(this.getJSON<any>('media').transcodings)
      };
    });
  }

  #getPermalink() {
    return this.lazyGet('permalink', () => {
      return {
        basic: this.getJSON<string>('permalink'),
        full: this.getJSON<string>('permalink_url')
      };
    });
  }

  #getApiInfo() {
    return this.lazyGet('api', () => {
      return {
        streamable: this.getJSON<boolean>('streamable'),
        uri: this.getJSON<string>('uri'),
        urn: this.getJSON<string>('urn')
      };
    });
  }

  #getPurchaseInfo() {
    return this.lazyGet('purchase', () => {
      return {
        title: this.getJSON<string>('purchase_title'),
        url: this.getJSON<string>('purchase_url')
      };
    });
  }

  #getPublisher() {
    return this.lazyGet('publisher', () => {
      const publisherData = this.getJSON<any>('publisher_metadata');
      if (publisherData) {
        return new Publisher(publisherData, this.getClient());
      }

      return null;

    });
  }

  #getDurations() {
    return this.lazyGet('durations', () => {
      return {
        full: this.getJSON<number>('full_duration'),
        playback: this.getJSON<number>('duration')
      };
    });
  }

  #getGenre() {
    return this.getJSON<string>('genre');
  }

  #getLicense() {
    return this.getJSON<string>('license');
  }

  #isPublic() {
    return this.getJSON<boolean>('public');
  }

  #getTags() {
    return this.getJSON<string>('tag_list');
  }

  #getLabel() {
    return this.getJSON<string>('label_name');
  }

  #getArtwork() {
    return this.getImageUrls(this.getJSON<string>('artwork_url'));
  }

  #getWaveform() {
    return this.getJSON<string>('waveform_url');
  }

  #getUser() {
    return this.lazyGet('user', () => {
      const userData = this.getJSON<any>('user');
      if (userData) {
        return new User(userData, this.getClient());
      }
      return undefined;
    });
  }

  get id() {
    return this.#getId();
  }

  get texts() {
    return this.#getTexts();
  }

  get dates() {
    return this.#getDates();
  }

  get downloadData() {
    return this.#getDownloadData();
  }

  get socialData() {
    return this.#getSocialData();
  }

  get sharingData() {
    return this.#getSharingData();
  }

  get playbackData() {
    return this.#getPlaybackData();
  }

  get isBlocked() {
    return this.#isBlocked();
  }

  get isSnipped() {
    return this.#isSnipped();
  }

  get mediaInfo() {
    return this.#getMediaInfo();
  }

  get permalink() {
    return this.#getPermalink();
  }

  get apiInfo() {
    return this.#getApiInfo();
  }

  get purchaseInfo() {
    return this.#getPurchaseInfo();
  }

  get publisher() {
    return this.#getPublisher();
  }

  get durations() {
    return this.#getDurations();
  }

  get genre() {
    return this.#getGenre();
  }

  get license() {
    return this.#getLicense();
  }

  get isPublic() {
    return this.#isPublic();
  }

  get tags() {
    return this.#getTags();
  }

  get label() {
    return this.#getLabel();
  }

  get artwork() {
    return this.#getArtwork();
  }

  get waveform() {
    return this.#getWaveform();
  }

  get user() {
    return this.#getUser();
  }

  #parseTranscodings(transcodings: any): MediaTranscoding[] {
    if (Array.isArray(transcodings)) {
      return transcodings.map((t: any) => new MediaTranscoding(t, this.getClient()));
    }
    return [];
  }
}
