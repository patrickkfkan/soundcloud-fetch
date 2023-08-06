import SoundCloud from '../SoundCloud.js';
import { ARTWORK_FORMATS, AVATAR_FORMATS } from '../utils/Constants.js';

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
  getJSON(prop?: string) {
    if (!prop) {
      return this.#json;
    }
    return this.#json[prop] !== undefined ? this.#json[prop] : null;
  }

  protected getClient() {
    return this.#client;
  }

  protected lazyGet<T>(key: string, getValue: () => T): T {
    if (this.#lazyValues[key] === undefined) {
      this.#lazyValues[key] = getValue();
    }
    return this.#lazyValues[key];
  }

  protected async lazyGetAsync<T>(key: string, getValueAsync: () => Promise<T>): Promise<T> {
    if (this.#lazyValues[key] === undefined) {
      this.#lazyValues[key] = await getValueAsync();
    }
    return this.#lazyValues[key];
  }

  protected getImageUrls(defaultImageUrl: string, type: 'artwork' | 'avatar' = 'artwork') {
    if (defaultImageUrl === null) {
      return null;
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
