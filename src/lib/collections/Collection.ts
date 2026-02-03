import type SoundCloud from '../SoundCloud.js';
import EntityBuilder from '../utils/EntityBuilder.js';
import { type EntityClasses, type EntityClassesToTypes, type EntityConstructor, type EntityType } from '../utils/EntityTypes.js';
import CollectionContinuation from './CollectionContinuation.js';

export type CollectionOptions<T extends EntityType> = {
  requireTypes?: EntityClasses<T>
  asType?: undefined;
} | {
  requireTypes?: undefined;
  asType: EntityConstructor<T>
};

export default class Collection<T extends EntityType> {

  static readonly type: string = 'Collection';
  readonly type: string;

  items: EntityClassesToTypes<EntityClasses<T>>[];
  continuation: CollectionContinuation<T> | null;

  #json: any;
  #client: SoundCloud;
  #opts: CollectionOptions<T>;

  constructor(json: any, client: SoundCloud, opts: CollectionOptions<T>) {
    this.#json = json;
    this.#client = client;
    this.#opts = opts;

    this.items = this.getItems();

    const nextUri = this.getJSON<string>('next_href');
    if (nextUri) {
      this.continuation = new CollectionContinuation(nextUri, opts);
    }
    else {
      this.continuation = null;
    }
  }

  protected getItems(): EntityClassesToTypes<EntityClasses<T>>[] {
    const opts = this.#opts;
    const json = this.getJSON();
    let itemsData: any[];
    if (Array.isArray(json)) {
      itemsData = json;
    }
    else if (Reflect.has(json, 'collection') && Array.isArray(json.collection)) {
      itemsData = json.collection;
    }
    else {
      itemsData = [];
    }

    const requireTypes = opts.requireTypes;
    const asType = opts.asType;

    const client = this.getClient();
    return itemsData.reduce((result, item) => {
      const entity = asType ?
        EntityBuilder.buildAs(item, client, asType) :
        EntityBuilder.build(item, client, requireTypes);
      if (entity !== null) {
        result.push(entity);
      }
      return result;
    }, []);
  }

  getJSON(prop?: undefined): any;
  // eslint-disable-next-line @typescript-eslint/no-unnecessary-type-parameters
  getJSON<T extends string>(prop: string): T | null | undefined;
  // eslint-disable-next-line @typescript-eslint/no-unnecessary-type-parameters
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
}
