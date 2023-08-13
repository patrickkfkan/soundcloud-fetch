import SoundCloud from '../SoundCloud.js';
import Collection from '../collections/Collection.js';
import { EntityClasses, EntityConstructor, EntityType } from './EntityTypes.js';

export default class CollectionBuilder {

  static build<T extends EntityType>(
    json: any,
    client: SoundCloud,
    requireTypes?: EntityClasses<T>): Collection<T> {

    return new Collection(json, client, { requireTypes });
  }

  static buildAs<T extends EntityType>(
    json: any,
    client: SoundCloud,
    type: EntityConstructor<T>): Collection<T> {

    return new Collection(json, client, { asType: type });
  }
}
