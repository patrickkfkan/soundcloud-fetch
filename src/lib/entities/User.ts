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
    return this.getJSON('id');
  }

  #getNames() {
    return {
      full: this.getJSON('full_name'),
      first: this.getJSON('first_name'),
      last: this.getJSON('last_name'),
      username: this.getJSON('username')
    };
  }

  #getLastModified() {
    return this.getJSON('last_modified');
  }

  #getPermalink() {
    return {
      basic: this.getJSON('permalink'),
      full: this.getJSON('permalink_url')
    };
  }

  #getApiInfo() {
    return {
      uri: this.getJSON('uri'),
      urn: this.getJSON('urn')
    };
  }

  #getLocation() {
    return {
      city: this.getJSON('city'),
      country: this.getJSON('country_code')
    };
  }

  #isVerified() {
    return this.getJSON('verified');
  }

  #getAvatar() {
    return this.getImageUrls(this.getJSON('avatar_url'), 'avatar');
  }

  #getBadges() {
    const badges = this.getJSON('badges');
    return {
      pro: badges.pro,
      proUnlimited: badges.pro_unlimited,
      verified: badges.verified
    };
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
