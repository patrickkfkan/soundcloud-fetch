import type SoundCloud from '../SoundCloud.js';
import Album from '../entities/Album.js';
import Like from '../entities/Like.js';
import Playlist from '../entities/Playlist.js';
import Selection from '../entities/Selection.js';
import SystemPlaylist from '../entities/SystemPlaylist.js';
import Track from '../entities/Track.js';
import User from '../entities/User.js';
import { type EntityClasses, type EntityClassesToTypes, type EntityConstructor, type EntityType } from './EntityTypes.js';

export default class EntityBuilder {

  static build<T extends EntityType, K extends EntityClasses<T>> (
    json: any & { kind?: string },
    client: SoundCloud,
    requireTypes?: K): EntityClassesToTypes<K> | null {

    let entity: any;
    switch (json.kind) {
      case 'playlist':
        if (json.is_album) {
          entity = new Album(json, client);
        }
        else {
          entity = new Playlist(json, client);
        }
        break;
      case 'selection':
        entity = new Selection(json, client);
        break;
      case 'system-playlist':
        entity = new SystemPlaylist(json, client);
        break;
      case 'track':
        entity = new Track(json, client);
        break;
      case 'user':
        entity = new User(json, client);
        break;
      case 'like':
        entity = new Like(json, client);
        break;
      default:
        entity = null;
    }
    if (!requireTypes || !entity) {
      return entity;
    }
    const types = Array.isArray(requireTypes) ? requireTypes : [ requireTypes ];
    for (const c of types) {
      if (entity instanceof c) {
        return entity;
      }
    }
    return null;
  }

  static buildAs<T extends EntityType>(json: any & { kind?: string }, client: SoundCloud, type: EntityConstructor<T>): T {
    return new type(json, client);
  }
}
