import SoundCloud from '../SoundCloud.js';
import { EntityType } from '../utils/EntityTypes.js';

export default abstract class Collection<T extends EntityType> {

  #json: any;
  #client: SoundCloud;
  #lazyValues: Record<string, any>;

  constructor(json: any, client: SoundCloud) {
    this.#json = json;
    this.#client = client;
    this.#lazyValues = {};

    Object.defineProperties(this, {
      type: {
        enumerable: true,
        get() {
          return this.getType();
        }
      },
      items: {
        enumerable: true,
        get() {
          return this.getItems();
        }
      }
    });
  }

  protected abstract getType(): string;
  protected abstract getItems(): T[];

  get type(): string {
    return this.getType();
  }

  get items(): T[] {
    return this.getItems();
  }

  /**
   * @internal
   */
  getJSON(prop: string) {
    if (!prop) {
      return this.#json;
    }
    return this.#json[prop] !== undefined ? this.#json[prop] : null;
  }

  protected getClient() {
    return this.#client;
  }

  get nextUri() {
    return this.getJSON('next_href');
  }

  protected lazyGet<T>(key: string, getValue: () => T): T {
    if (this.#lazyValues[key] === undefined) {
      this.#lazyValues[key] = getValue();
    }
    return this.#lazyValues[key];
  }

  toPlainObject() {
    return JSON.parse(JSON.stringify(this));
  }
}
