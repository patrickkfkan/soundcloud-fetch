import SoundCloud from '../SoundCloud.js';
import EntityBuilder from '../utils/EntityBuilder.js';
import { EntityConstructor, EntityType } from '../utils/EntityTypes.js';
import Collection from './Collection.js';

export default class GenericCollection<T extends EntityType> extends Collection<T> {

  #items: any[];
  #requireTypes?: Array<EntityConstructor<T>>;

  constructor(json: any, client: SoundCloud, requireTypes?: EntityConstructor<T> | Array<EntityConstructor<T>>) {
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

    if (requireTypes) {
      this.#requireTypes = Array.isArray(requireTypes) ? requireTypes : [ requireTypes ];
    }
  }

  protected getType() {
    return this.getJSON('kind') || 'unknown-collection';
  }

  protected getItems(): T[] {
    const client = this.getClient();
    return this.lazyGet('items', () => {
      return this.#items.reduce((result, item) => {
        const entity = EntityBuilder.buildByKind(item, client, this.#requireTypes);
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