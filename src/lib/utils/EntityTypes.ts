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
