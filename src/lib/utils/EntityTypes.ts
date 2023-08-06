import Album from '../entities/Album.js';
import Playlist from '../entities/Playlist.js';
import Selection from '../entities/Selection.js';
import SystemPlaylist from '../entities/SystemPlaylist.js';
import Track from '../entities/Track.js';
import User from '../entities/User.js';

export type EntityType = Album | Playlist | Selection | SystemPlaylist | Track | User;
export type EntityConstructor<T extends EntityType> = new (...args: any) => T;
