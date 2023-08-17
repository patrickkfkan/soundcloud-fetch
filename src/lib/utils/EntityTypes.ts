import Album from '../entities/Album.js';
import Playlist from '../entities/Playlist.js';
import Selection from '../entities/Selection.js';
import SystemPlaylist from '../entities/SystemPlaylist.js';
import Track from '../entities/Track.js';
import User from '../entities/User.js';
import PlayHistoryItem from '../entities/PlayHistoryItem.js';
import LibraryItem from '../entities/LibraryItem.js';
import Like from '../entities/Like.js';

export type EntityType =
    Album |
    Playlist |
    Selection |
    SystemPlaylist |
    Track |
    User |
    Like |
    PlayHistoryItem |
    LibraryItem;

export interface EntityConstructor<T extends EntityType> {
  new (...args: any): T;
  type: string;
}

export type EntityClasses<T extends EntityType> = EntityConstructor<T> | EntityConstructor<T>[];

// Use this as return type instead of T to prevent upcasting to `EntityType`
export type EntityClassesToTypes<K> =
  K extends EntityConstructor<infer U> ? U :
  K extends EntityConstructor<infer U>[] ? U :
  never;

function getEntityClassMap() {
  return {
    'Album': Album,
    'Playlist': Playlist,
    'Selection': Selection,
    'SystemPlaylist': SystemPlaylist,
    'Track': Track,
    'User': User,
    'Like': Like,
    'PlayHistoryItem': PlayHistoryItem,
    'LibraryItem': LibraryItem
  };
}

export function getEntityClassName<T extends EntityType>(value: EntityConstructor<T>) {
  const map = getEntityClassMap();
  for (const [ name, cl ] of Object.entries(map)) {
    if (cl === value) {
      return name;
    }
  }
  return null;
}

export function getEntityClassByName(name: string) {
  const map = getEntityClassMap();
  for (const [ clName, cl ] of Object.entries(map)) {
    if (clName === name) {
      return cl;
    }
  }
  return null;
}
