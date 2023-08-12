import SoundCloud from '../SoundCloud.js';
import { ARTWORK_FORMATS, AVATAR_FORMATS } from '../utils/Constants.js';
import { EntityConstructor, EntityType } from '../utils/EntityTypes.js';

export type AvatarImageUrls = Record<'default' | typeof AVATAR_FORMATS[number], string>;
export type ArtworkImageUrls = Record<'default' | typeof ARTWORK_FORMATS[number], string>;

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
  protected getImageUrls(defaultImageUrl: string | null | undefined, type?: 'artwork' | undefined): ArtworkImageUrls | undefined;
  protected getImageUrls(defaultImageUrl: string | null | undefined, type: 'artwork' | 'avatar' = 'artwork') {

    if (!defaultImageUrl) {
      return undefined;
    }
    else if (defaultImageUrl.indexOf('large.jpg') < 0) {
      return defaultImageUrl;
    }

    const formats = type === 'avatar' ? AVATAR_FORMATS : ARTWORK_FORMATS;

    const formatUrls: Record<string, string> = {
      default: defaultImageUrl
    };
    formats.forEach((format) => {
      formatUrls[format] = defaultImageUrl.replace('large.jpg', `${format}.jpg`);
    });
    return formatUrls;
  }
}
