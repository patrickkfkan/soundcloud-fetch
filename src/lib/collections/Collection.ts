import SoundCloud from '../SoundCloud.js';
import EntityBuilder from '../utils/EntityBuilder.js';
import { EntityClasses, EntityClassesToTypes, EntityConstructor, EntityType } from '../utils/EntityTypes.js';

export type CollectionOptions<T extends EntityType> = {
  requireTypes?: EntityClasses<T>
} | {
  asType: EntityConstructor<T>
};

export interface CollectionContinuation<T extends EntityType> {
  uri: string;
  opts: CollectionOptions<T>;
}

export default class Collection<T extends EntityType> {

  static readonly type: string = 'Collection';
  readonly type: string;

  items: EntityClassesToTypes<EntityClasses<T>>[];
  nextUri?: string | null;
  continuation: CollectionContinuation<T> | null;

  #json: any;
  #client: SoundCloud;
  #opts: CollectionOptions<T>;

  constructor(json: any, client: SoundCloud, opts: CollectionOptions<T>) {
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

    let requireTypes: EntityClasses<T>;
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
