import SoundCloud from '../SoundCloud.js';
import { ARTWORK_FORMATS, AVATAR_FORMATS } from '../utils/Constants.js';

export type AvatarImageUrls = Record<'default' | typeof AVATAR_FORMATS[number], string>;
export type ArtworkImageUrls = Record<'default' | typeof ARTWORK_FORMATS[number], string>;

export default abstract class Entity {

  #json: any;
  #client: SoundCloud;
  #lazyValues: Record<string, any>;

  constructor(json: any, client: SoundCloud) {
    this.#json = json;
    this.#client = client;
    this.#lazyValues = {};

    Object.defineProperty(this, 'type', {
      enumerable: true,
      get() {
        return this.getType();
      }
    });
  }

  protected abstract getType(): string;

  get type() {
    return this.getType();
  }

  /**
   * @internal
   */
  getJSON<T extends string>(prop?: string): T | null | undefined;
  getJSON<T>(prop?: string): T | undefined;
  getJSON<T>(prop?: string): T | undefined {
    if (!prop) {
      return this.#json;
    }
    return this.#json[prop] !== undefined ? this.#json[prop] : undefined;
  }

  protected getClient() {
    return this.#client;
  }

  protected lazyGet<T>(key: string, getValue: () => T): T | undefined {
    if (this.#lazyValues[key] === undefined) {
      this.#lazyValues[key] = getValue();
    }
    const value = this.#lazyValues[key];
    if (value && typeof value === 'object' && Object.entries(value).length === 0) {
      return undefined;
    }
    return this.#lazyValues[key];
  }

  protected async lazyGetAsync<T>(key: string, getValueAsync: () => Promise<T>): Promise<T | undefined> {
    if (this.#lazyValues[key] === undefined) {
      this.#lazyValues[key] = await getValueAsync();
    }
    const value = this.#lazyValues[key];
    if (value && typeof value === 'object' && Object.entries(value).length === 0) {
      return undefined;
    }
    return this.#lazyValues[key];
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

  toPlainObject() {
    return JSON.parse(JSON.stringify(this));
  }
}
