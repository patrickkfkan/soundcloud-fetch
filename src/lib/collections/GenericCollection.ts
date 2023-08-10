import SoundCloud from '../SoundCloud.js';
import EntityBuilder from '../utils/EntityBuilder.js';
import { EntityClasses, EntityClassesToTypes, EntityConstructor, EntityType } from '../utils/EntityTypes.js';
import Collection from './Collection.js';

export type GenericCollectionOptions<T extends EntityType, K extends EntityClasses<T>> = {
  requireTypes?: K
} | {
  asType?: EntityConstructor<T>
};

export default class GenericCollection<T extends EntityType, K extends EntityClasses<T>> extends Collection<T, K> {

  #items: any[];
  #requireTypes?: K;
  #asType?: EntityConstructor<T>;

  constructor(json: any, client: SoundCloud, options: GenericCollectionOptions<T, K> = {}) {
    super(json, client);

    if (Array.isArray(json)) {
      this.#items = json;
    }
    else if (Array.isArray(json.collection)) {
      this.#items = json.collection;
    }
    else {
      this.#items = [];
    }

    if (Reflect.has(options, 'requireTypes')) {
      this.#requireTypes = Reflect.get(options, 'requireTypes');
    }
    else if (Reflect.has(options, 'asType')) {
      this.#asType = Reflect.get(options, 'asType');
    }
  }

  protected getType() {
    return this.getJSON<string>('kind') || 'unknown-collection';
  }

  protected getItems(): EntityClassesToTypes<T, K>[] {
    const client = this.getClient();
    return this.lazyGet('items', () => {
      return this.#items.reduce((result, item) => {
        const entity = this.#asType ?
          EntityBuilder.buildAs(item, client, this.#asType) :
          EntityBuilder.build(item, client, this.#requireTypes);
        if (entity !== null) {
          result.push(entity);
        }
        return result;
      }, []);
    });
  }
}

[ 'type', 'items' ].forEach((prop) => Object.defineProperty(GenericCollection.prototype,
  prop, {enumerable: true}));
