import SoundCloud from '../SoundCloud.js';
import { EntityClasses, EntityClassesToTypes, EntityType } from '../utils/EntityTypes.js';

export default abstract class Collection<T extends EntityType, K extends EntityClasses<T>> {

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
      },
      nextUri: {
        enumerable: true,
        get() {
          return this.#getNextUri();
        }
      }
    });
  }

  protected abstract getType(): string;
  protected abstract getItems(): EntityClassesToTypes<T, K>[];

  #getNextUri() {
    return this.getJSON<string>('next_href');
  }

  get type(): string {
    return this.getType();
  }

  get items(): EntityClassesToTypes<T, K>[] {
    return this.getItems();
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

  get nextUri() {
    return this.#getNextUri();
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
