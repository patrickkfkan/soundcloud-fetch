import Album from '../entities/Album.js';
import Playlist from '../entities/Playlist.js';
import Selection from '../entities/Selection.js';
import SystemPlaylist from '../entities/SystemPlaylist.js';
import Track from '../entities/Track.js';
import User from '../entities/User.js';
import PlayedSet from '../entities/library/PlayedSet.js';
import PlayedTrack from '../entities/library/PlayedTrack.js';

export type EntityType =
    Album |
    Playlist |
    Selection |
    SystemPlaylist |
    Track |
    User |
    PlayedTrack |
    PlayedSet;

export type EntityConstructor<T extends EntityType> = new (...args: any) => T;

export type EntityClasses<T extends EntityType> = EntityConstructor<T> | EntityConstructor<T>[];

// Use this as return type instead of T to prevent upcasting to `EntityType`
export type EntityClassesToTypes<T extends EntityType, K extends EntityClasses<T>> =
  K extends EntityConstructor<infer U> ? U :
  K extends EntityConstructor<infer U>[] ? U :
  never;
