import SoundCloud from '../SoundCloud.js';
import Album from '../entities/Album.js';
import Playlist from '../entities/Playlist.js';
import Selection from '../entities/Selection.js';
import SystemPlaylist from '../entities/SystemPlaylist.js';
import Track from '../entities/Track.js';
import User from '../entities/User.js';
import { EntityConstructor, EntityType } from './EntityTypes.js';

export default class EntityBuilder {

  static buildByKind<T extends EntityType[] = EntityType[]>(
    json: any & { kind?: string },
    client: SoundCloud,
    requireTypes?: EntityConstructor<T[number]> | Array<EntityConstructor<T[number]>>): T[number] | null {

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
}
