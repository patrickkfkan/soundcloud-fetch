import { EntityType, getEntityClassByName, getEntityClassName } from '../utils/EntityTypes.js';
import { CollectionOptions } from './Collection.js';

export default class CollectionContinuation<T extends EntityType> {
  readonly uri: string;
  readonly opts: CollectionOptions<T>;

  constructor(uri: string, opts: CollectionOptions<T> = {}) {
    this.uri = uri;
    this.opts = opts;
  }

  static stringify<T extends EntityType>(data: CollectionContinuation<T>) {
    const jsonData: Record<string, any> = {
      uri: data.uri
    };
    const opts = data.opts;
    jsonData.opts = {};
    if (opts.asType) {
      const typeName = getEntityClassName(opts.asType);
      if (typeName) {
        jsonData.opts.asType = typeName;
      }
    }
    else if (opts.requireTypes) {
      const requireTypes = opts.requireTypes;
      if (Array.isArray(requireTypes)) {
        jsonData.opts.requireTypes = requireTypes.reduce<string[]>((result, t) => {
          const typeName = getEntityClassName(t);
          if (typeName) {
            result.push(typeName);
          }
          return result;
        }, []);
      }
      else {
        const typeName = getEntityClassName(requireTypes);
        if (typeName) {
          jsonData.opts.requireTypes = typeName;
        }
      }
    }
    return JSON.stringify(jsonData);
  }

  static parse(data: string) {
    const jsonData = JSON.parse(data);
    const { uri, opts } = jsonData;
    if (!uri) {
      return null;
    }
    let collectionOptions = {};
    if (opts && typeof opts === 'object') {
      const { asType, requireTypes } = opts;
      if (asType) {
        const entityClass = getEntityClassByName(asType);
        if (entityClass) {
          collectionOptions = {
            asType: entityClass
          };
        }
      }
      else if (requireTypes) {
        if (Array.isArray(requireTypes)) {
          collectionOptions = {
            requireTypes: requireTypes.reduce((result, t) => {
              const entityClass = getEntityClassByName(t);
              if (entityClass) {
                result.push(entityClass);
              }
              return result;
            }, [])
          };
        }
        else {
          const entityClass = getEntityClassByName(requireTypes);
          if (entityClass) {
            collectionOptions = {
              requireTypes: entityClass
            };
          }
        }
      }
    }
    return new CollectionContinuation(uri, collectionOptions);
  }
}
