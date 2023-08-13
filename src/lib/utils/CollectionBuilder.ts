import SoundCloud from '../SoundCloud.js';
import Collection from '../collections/Collection.js';
import { EntityClasses, EntityConstructor, EntityType } from './EntityTypes.js';

export default class CollectionBuilder {

  static build<T extends EntityType, K extends EntityClasses<T>>(
    json: any,
    client: SoundCloud,
    requireTypes?: K): Collection<T, K> {

    return new Collection(json, client, { requireTypes });
  }

  static buildAs<T extends EntityType, K extends EntityConstructor<T>>(
    json: any,
    client: SoundCloud,
    type: K): Collection<T, K> {

    return new Collection(json, client, { asType: type });
  }
}
