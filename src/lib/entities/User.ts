import SoundCloud from '../SoundCloud.js';
import Entity from './Entity.js';

export default class User extends Entity {

  constructor(json: any, client: SoundCloud) {
    super(json, client);

    Object.defineProperties(this, {
      id: {
        enumerable: true,
        get() {
          return this.#getId();
        }
      },
      names: {
        enumerable: true,
        get() {
          return this.#getNames();
        }
      },
      lastModified: {
        enumerable: true,
        get() {
          return this.#getLastModified();
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
      location: {
        enumerable: true,
        get() {
          return this.#getLocation();
        }
      },
      isVerified: {
        enumerable: true,
        get() {
          return this.#isVerified();
        }
      },
      avatar: {
        enumerable: true,
        get() {
          return this.#getAvatar();
        }
      },
      badges: {
        enumerable: true,
        get() {
          return this.#getBadges();
        }
      }
    });
  }

  protected getType() {
    return 'user';
  }

  #getId() {
    return this.getJSON<number>('id');
  }

  #getNames() {
    return this.lazyGet('names', () => {
      return {
        full: this.getJSON<string>('full_name'),
        first: this.getJSON<string>('first_name'),
        last: this.getJSON<string>('last_name'),
        username: this.getJSON<string>('username')
      };
    });
  }

  #getLastModified() {
    return this.getJSON<string>('last_modified');
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
        uri: this.getJSON<string>('uri'),
        urn: this.getJSON<string>('urn')
      };
    });
  }

  #getLocation() {
    return this.lazyGet('location', () => {
      return {
        city: this.getJSON<string>('city'),
        country: this.getJSON<string>('country_code')
      };
    });
  }

  #isVerified() {
    return this.getJSON<boolean>('verified');
  }

  #getAvatar() {
    return this.getImageUrls(this.getJSON<string>('avatar_url'), 'avatar');
  }

  #getBadges() {
    return this.lazyGet('badges', () => {
      const badges = this.getJSON<any>('badges');
      return {
        pro: badges.pro as boolean | undefined,
        proUnlimited: badges.pro_unlimited as boolean | undefined,
        verified: badges.verified as boolean | undefined
      };
    });
  }

  get id() {
    return this.#getId();
  }

  get names() {
    return this.#getNames();
  }

  get lastModified() {
    return this.#getLastModified();
  }

  get permalink() {
    return this.#getPermalink();
  }

  get apiInfo() {
    return this.#getApiInfo();
  }

  get location() {
    return this.#getLocation();
  }

  get isVerified() {
    return this.#isVerified();
  }

  get avatar() {
    return this.#getAvatar();
  }

  get badges() {
    return this.#getBadges();
  }
}
