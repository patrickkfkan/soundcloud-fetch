import SoundCloud from '../SoundCloud.js';
import EntityBuilder from '../utils/EntityBuilder.js';
import { EntityClasses, EntityClassesToTypes, EntityConstructor, EntityType } from '../utils/EntityTypes.js';

export type CollectionOptions<T extends EntityType, K extends EntityClasses<T>> = {
  requireTypes?: K
} | {
  asType: EntityConstructor<T>
};

export interface CollectionContinuation<T extends EntityType, K extends EntityClasses<T>> {
  uri: string;
  opts: CollectionOptions<T, K>;
}

export default class Collection<T extends EntityType, K extends EntityClasses<T>> {

  static readonly type: string = 'Collection';
  readonly type: string;

  items: EntityClassesToTypes<T, K>[];
  nextUri?: string | null;
  continuation: CollectionContinuation<T, K> | null;

  #json: any;
  #client: SoundCloud;
  #opts: CollectionOptions<T, K>;

  constructor(json: any, client: SoundCloud, opts: CollectionOptions<T, K>) {
    this.#json = json;
    this.#client = client;
    this.#opts = opts;

    this.items = this.getItems();
    this.nextUri = this.getJSON<string>('next_href');

    if (this.nextUri) {
      this.continuation = {
        uri: this.nextUri,
        opts
      };
    }
    else {
      this.continuation = null;
    }
  }

  protected getItems(): EntityClassesToTypes<T, K>[] {
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

    let requireTypes: K;
    let asType: EntityConstructor<T>;
    if (Reflect.has(opts, 'requireTypes')) {
      requireTypes = Reflect.get(opts, 'requireTypes');
    }
    else if (Reflect.has(opts, 'asType')) {
      asType = Reflect.get(opts, 'asType');
    }

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
}
