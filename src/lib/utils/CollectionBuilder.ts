import SoundCloud from '../SoundCloud.js';
import GenericCollection from '../collections/GenericCollection.js';
import { EntityConstructor, EntityType } from './EntityTypes.js';

export default class CollectionBuilder {
  static build<T extends EntityType>(json: any, client: SoundCloud, requireTypes ?: EntityConstructor<T> | Array<EntityConstructor<T>>) {
    return new GenericCollection(json, client, requireTypes);
  }
}
