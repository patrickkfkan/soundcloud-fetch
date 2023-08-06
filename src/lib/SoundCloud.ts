import fetch from 'node-fetch';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import sckey from 'soundcloud-key-fetch';
import { API_BASE_URL, QUERY_MAX_LIMIT } from './utils/Constants.js';
import Playlist from './entities/Playlist.js';
import Track from './entities/Track.js';
import SystemPlaylist from './entities/SystemPlaylist.js';
import User from './entities/User.js';
import Album from './entities/Album.js';
import Collection from './collections/Collection.js';
import Selection from './entities/Selection.js';
import { EntityConstructor, EntityType } from './utils/EntityTypes.js';
import CollectionBuilder from './utils/CollectionBuilder.js';
import EntityBuilder from './utils/EntityBuilder.js';

export interface SoundCloudInitArgs {
  clientId?: string;
  locale?: string;
}

export interface SoundCloudPageOptions {
  limit?: number;
  offset?: number;
}

export default class SoundCloud {

  #clientId?: string;
  #locale?: string;

  constructor(args?: SoundCloudInitArgs) {
    if (args?.clientId) this.#clientId = args.clientId;
    if (args?.locale) this.#locale = args.locale;
  }

  async getClientId(): Promise<string> {
    if (!this.#clientId) {
      this.#clientId = await SoundCloud.generateClientId();
    }
    return this.#clientId;
  }

  static async generateClientId(): Promise<string> {
    return sckey.fetchKey();
  }

  getLocale() {
    return this.#locale;
  }

  setLocale(locale?: string) {
    this.#locale = locale;
  }

  /************************************************************/
  /* Selection                                                */
  /************************************************************/

  async getMixedSelections(options?: SoundCloudPageOptions) {
    const params = await this.#getCommonParams(options);
    const endpoint = '/mixed-selections';
    return this.#fetchCollection(endpoint, params, Selection);
  }

  /************************************************************/
  /* Playlist / Album                                         */
  /************************************************************/

  async #getPlaylist(id: number, asAlbum: true): Promise<Album | null>;
  async #getPlaylist(id: number, asAlbum?: false | undefined): Promise<Playlist | null>;
  async #getPlaylist(id: number, asAlbum = false) {
    const params = await this.#getCommonParams();
    params.representation = 'full';
    const endpoint = `/playlists/${id}`;
    if (!asAlbum) {
      return this.#fetchEntity(endpoint, params, Playlist);
    }
    return this.#fetchEntity(endpoint, params, Album);
  }

  async getPlaylist(id: number) {
    return this.#getPlaylist(id);
  }

  async getSystemPlaylist(id: string) {
    const params = await this.#getCommonParams();
    const endpoint = `/system-playlists/${id}`;
    return this.#fetchEntity(endpoint, params, SystemPlaylist);
  }

  async getPlaylistsByUser(id: number, options?: SoundCloudPageOptions) {
    const params = await this.#getCommonParams(options);
    const endpoint = `/users/${id}/playlists_without_albums`;
    return this.#fetchCollection(endpoint, params, Playlist);
  }

  async getAlbum(id: number) {
    return this.#getPlaylist(id, true);
  }

  async getAlbumsByUser(id: number, options?: SoundCloudPageOptions) {
    const params = await this.#getCommonParams(options);
    const endpoint = `/users/${id}/albums`;
    return this.#fetchCollection(endpoint, params, Album);
  }

  /************************************************************/
  /* Track                                                    */
  /************************************************************/

  async getTopFeaturedTracks(options?: SoundCloudPageOptions & { genre?: string }) {
    const params = await this.#getCommonParams(options);
    const genre = options?.genre || 'all-music';
    const endpoint = `/featured_tracks/top/${genre}`;
    return this.#fetchCollection(endpoint, params, Track);
  }

  async getTracks(ids: number | number[]): Promise<Track[]> {
    const limit = QUERY_MAX_LIMIT;
    const params = await this.#getCommonParams();
    params.linked_partitioning = 0;
    const endpoint = '/tracks';
    if (!Array.isArray(ids) || ids.length <= limit) {
      params.ids = Array.isArray(ids) ? ids.join(',') : ids;
      const collection = await this.#fetchCollection(endpoint, params, Track);
      return collection.items;
    }

    const promises = [];
    let offset = 0;
    while (offset < ids.length) {
      const slice = ids.slice(offset, offset + limit);
      promises.push(this.getTracks(slice));
      offset += limit;
    }
    const results = await Promise.all(promises);
    return results.reduce((concat, r) => {
      concat.push(...r);
      return concat;
    }, []);

  }

  async getTracksByUser(id: number, options?: SoundCloudPageOptions) {
    const params = await this.#getCommonParams(options);
    params.representation = 'full';
    const endpoint = `/users/${id}/tracks`;
    return this.#fetchCollection(endpoint, params, Track);
  }

  async getTrack(id: number): Promise<Track | null> {
    const tracks = await this.getTracks(id);
    return tracks[0] || null;
  }

  async getStreamingUrl(transcodingUrl: string): Promise<string> {
    const params = await this.#getCommonParams();
    const url = new URL(transcodingUrl);
    for (const [ key, value ] of Object.entries(params)) {
      url.searchParams.set(key, value);
    }
    const json = await fetch(url).then((res) => res.json());
    return json.url;
  }

  /************************************************************/
  /* User                                                     */
  /************************************************************/

  async getUser(id: number) {
    const params = await this.#getCommonParams();
    const endpoint = `/users/${id}`;
    return this.#fetchEntity(endpoint, params, User);
  }

  /************************************************************/
  /* Search                                                   */
  /************************************************************/

  async search(q: string, options: SoundCloudPageOptions & { type: 'playlist' }): Promise<Collection<Playlist>>;
  async search(q: string, options: SoundCloudPageOptions & { type: 'album' }): Promise<Collection<Album>>;
  async search(q: string, options: SoundCloudPageOptions & { type: 'track' }): Promise<Collection<Track>>;
  async search(q: string, options: SoundCloudPageOptions & { type: 'user' }): Promise<Collection<User>>;
  async search(q: string, options: SoundCloudPageOptions & { type: 'playlist' | 'album' | 'track' | 'user'}) {
    const params = await this.#getCommonParams(options);
    params.q = q;
    let type = 'all';
    if (options && options.type) {
      type = options.type;
    }
    let endpoint = '/search';
    switch (type) {
      case 'playlist':
        endpoint += '/playlists_without_albums';
        return this.#fetchCollection(endpoint, params, Playlist);
      case 'album':
        endpoint += '/albums';
        return this.#fetchCollection(endpoint, params, Album);
      case 'track':
        endpoint += '/tracks';
        return this.#fetchCollection(endpoint, params, Track);
      case 'user':
        endpoint += '/users';
        return this.#fetchCollection(endpoint, params, User);
      default:
        throw Error(`Unknown search type ${type}`);
    }
  }

  /************************************************************/
  /* Internal                                                 */
  /************************************************************/

  async #getCommonParams(options: SoundCloudPageOptions = {}): Promise<Record<string, any>> {
    const clientId = await this.getClientId();
    const params: Record<string, any> = {
      client_id: clientId
    };
    if (options) {
      if (options.limit) params.limit = options.limit;
      if (options.offset) params.offset = options.offset;
    }
    if (this.#locale !== undefined) {
      params.app_locale = this.#locale;
    }
    return params;
  }

  async #fetchCollection<T extends EntityType>(endpoint: string, params: Record<string, any>, requireTypes?: EntityConstructor<T> | Array<EntityConstructor<T>>): Promise<Collection<T>>;
  async #fetchCollection(endpoint: string, params: Record<string, any>, requireTypes?: undefined): Promise<Collection<EntityType>>;
  async #fetchCollection<T extends EntityType>(endpoint: string, params: Record<string, any>, requireTypes?: EntityConstructor<T> | Array<EntityConstructor<T>>) {
    if (params.linked_partitioning === undefined) {
      params.linked_partitioning = 1;
    }
    const json = await this.#fetchEndpoint(endpoint, params);
    return CollectionBuilder.build(json, this, requireTypes);
  }

  async #fetchEntity<T extends EntityType>(endpoint: string, params: Record<string, any>, requireTypes: EntityConstructor<T> | Array<EntityConstructor<T>>): Promise<T | null>;
  async #fetchEntity(endpoint: string, params: Record<string, any>, requireTypes?: undefined): Promise<EntityType | null>;
  async #fetchEntity<T extends EntityType>(endpoint: string, params: Record<string, any>, requireTypes?: EntityConstructor<T> | Array<EntityConstructor<T>>) {
    const json = await this.#fetchEndpoint(endpoint, params);
    return EntityBuilder.buildByKind(json, this, requireTypes);
  }

  async #fetchEndpoint(endpoint: string, params: Record<string, any>) {
    const url = new URL(endpoint, API_BASE_URL);
    for (const [ key, value ] of Object.entries(params)) {
      url.searchParams.set(key, value);
    }
    return fetch(url).then((res) => res.json());
  }
}
