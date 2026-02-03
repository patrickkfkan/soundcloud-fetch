import type SoundCloud from '../SoundCloud.js';
import Entity, { type AvatarImageUrls } from './Entity.js';

export default class User extends Entity {

  static type = 'User';

  id?: number;
  names: {
    full?: string | null;
    first?: string | null;
    last?: string | null;
    username?: string | null;
  };
  lastModified?: string | null;
  permalink: {
    basic?: string | null;
    full?: string | null;
  };
  apiInfo: {
    uri?: string | null;
    urn?: string | null;
  };
  location: {
    city?: string | null;
    country?: string | null;
  };
  isVerified?: boolean;
  avatar?: AvatarImageUrls;
  badges: {
    pro?: boolean;
    proUnlimited?: boolean;
    verified?: boolean;
  };

  constructor(json: any, client: SoundCloud) {
    super(json, client);

    this.id = this.getJSON<number>('id');

    this.names = {
      full: this.getJSON<string>('full_name'),
      first: this.getJSON<string>('first_name'),
      last: this.getJSON<string>('last_name'),
      username: this.getJSON<string>('username')
    };

    this.lastModified = this.getJSON<string>('last_modified');

    this.permalink = {
      basic: this.getJSON<string>('permalink'),
      full: this.getJSON<string>('permalink_url')
    };

    this.apiInfo = {
      uri: this.getJSON<string>('uri'),
      urn: this.getJSON<string>('urn')
    };

    this.location = {
      city: this.getJSON<string>('city'),
      country: this.getJSON<string>('country_code')
    };

    this.isVerified = this.getJSON<boolean>('verified');
    this.avatar = this.getImageUrls(this.getJSON<string>('avatar_url'), 'avatar');

    const badges = this.getJSON<any>('badges');
    this.badges = {
      pro: badges?.pro,
      proUnlimited: badges?.pro_unlimited,
      verified: badges?.verified
    };
  }
}
