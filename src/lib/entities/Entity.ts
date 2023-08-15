import SoundCloud from '../SoundCloud.js';
import { EntityConstructor, EntityType } from '../utils/EntityTypes.js';

const ARTWORK_FORMATS = [ 't500x500', 't300x300', 't67x67' ] as const;
const ARTWORK_EXTENDED_FORMATS = [ ...ARTWORK_FORMATS, 'crop', 'large', 'badge', 'small', 'tiny', 'mini' ] as const;
const AVATAR_FORMATS = [ 't500x500', 'crop', 't300x300', 'large', 'badge', 'small', 'tiny', 'mini' ] as const;

export type AvatarImageUrls = {
  default: string;
  t500x500?: string; // 500x500
  crop?: string; // 400x400
  t300x300?: string; // 300300
  large?: string; // 100x100
  badge?: string; // 47x47
  small?: string; // 32x32
  tiny?: string; // 18x18
  mini?: string; // 16x16
};
export type ArtworkImageUrls = {
  default: string;
  t500x500?: string; // 500x500
  crop?: string; // 400x400
  t300x300?: string; // 300300
  large?: string; // 100x100
  t67x67?: string; // 67x67
  badge?: string; // 47x47
  small?: string; // 32x32
  tiny?: string; // 20x20
  mini?: string; // 16x16
};

export default abstract class Entity {

  static readonly type: string = 'Entity';
  readonly type: string;

  #json: any;
  #client: SoundCloud;

  constructor(json: any, client: SoundCloud) {
    this.#json = json;
    this.#client = client;

    this.type = (this.constructor as EntityConstructor<EntityType>).type;
  }

  getJSON(prop?: undefined): any;
  getJSON<T extends string>(prop: string): T | null | undefined;
  getJSON<T>(prop: string): T | undefined;
  getJSON(prop?: string): any {
    if (!prop) {
      return this.#json;
    }
    return this.#json[prop] !== undefined ? this.#json[prop] : undefined;
  }

  protected getClient() {
    return this.#client;
  }

  protected getImageUrls(defaultImageUrl: string | null | undefined, type: 'avatar'): AvatarImageUrls | undefined;
  protected getImageUrls(defaultImageUrl: string | null | undefined, type?: 'artwork' | 'artistStation' | undefined): ArtworkImageUrls | undefined;
  protected getImageUrls(defaultImageUrl: string | null | undefined, type: 'artwork' | 'artistStation' | 'avatar' = 'artwork') {

    if (!defaultImageUrl) {
      return undefined;
    }

    let formats;
    switch (type) {
      case 'avatar':
        formats = AVATAR_FORMATS;
        break;
      case 'artistStation':
        formats = ARTWORK_FORMATS;
        break;
      default:
        formats = ARTWORK_EXTENDED_FORMATS;
    }

    const formatUrls: Record<string, string> = {
      default: defaultImageUrl
    };

    const replaceFormat = formats.find((format) => defaultImageUrl.includes(`${format}.jpg`));
    if (!replaceFormat) {
      return formatUrls;
    }

    formats.forEach((format) => {
      formatUrls[format] = defaultImageUrl.replace(`${replaceFormat}.jpg`, `${format}.jpg`);
    });
    return formatUrls;
  }
}
