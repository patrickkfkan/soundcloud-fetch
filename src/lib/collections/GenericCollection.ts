import EntityBuilder from '../utils/EntityBuilder.js';
import { EntityClasses, EntityClassesToTypes, EntityConstructor, EntityType } from '../utils/EntityTypes.js';
import Collection from './Collection.js';

export type GenericCollectionOptions<T extends EntityType, K extends EntityClasses<T>> = {
  requireTypes?: K
} | {
  asType?: EntityConstructor<T>
};

export default class GenericCollection<T extends EntityType, K extends EntityClasses<T>> extends Collection<T, K, GenericCollectionOptions<T, K>> {

  static type = 'GenericCollection';

  protected getItems(opts: GenericCollectionOptions<T, K>): EntityClassesToTypes<T, K>[] {
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
}
