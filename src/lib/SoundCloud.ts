import fetch, { Headers } from 'node-fetch';
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
import { EntityClasses, EntityClassesToTypes, EntityConstructor, EntityType } from './utils/EntityTypes.js';
import CollectionBuilder from './utils/CollectionBuilder.js';
import EntityBuilder from './utils/EntityBuilder.js';
import PlayedTrack from './entities/library/PlayedTrack.js';
import PlayedSet from './entities/library/PlayedSet.js';

export interface SoundCloudInitArgs {
  clientId?: string;
  accessToken?: string;
  locale?: string;
}

export interface SoundCloudPageOptions {
  limit?: number;
  offset?: number | string;
}

export default class SoundCloud {

  #clientId?: string;
  #accessToken?: string;
  #locale?: string;

  constructor(args?: SoundCloudInitArgs) {
    if (args?.clientId) this.#clientId = args.clientId;
    if (args?.accessToken) this.#accessToken = args.accessToken;
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

  #getFetchHeaders(): Headers {
    const headers = new Headers({
      Origin: 'https://soundcloud.com',
      Referer: 'https://soundcloud.com/',
      'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36 Edg/114.0.1823.67'
    });

    if (this.#accessToken) {
      headers.set('Authorization', `OAuth ${this.#accessToken}`);
    }

    return headers;
  }

  /************************************************************/
  /* Selection                                                */
  /************************************************************/

  async getMixedSelections(options?: SoundCloudPageOptions) {
    const params = await this.#getCommonParams(options);
    const endpoint = '/mixed-selections';
    return this.#fetchCollection(endpoint, params, { requireTypes: Selection });
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
    return this.#fetchCollection(endpoint, params, {requireTypes: Playlist});
  }

  async getAlbum(id: number) {
    return this.#getPlaylist(id, true);
  }

  async getAlbumsByUser(id: number, options?: SoundCloudPageOptions) {
    const params = await this.#getCommonParams(options);
    const endpoint = `/users/${id}/albums`;
    return this.#fetchCollection(endpoint, params, {requireTypes: Album});
  }

  /************************************************************/
  /* Track                                                    */
  /************************************************************/

  async getTopFeaturedTracks(options?: SoundCloudPageOptions & { genre?: string }) {
    const params = await this.#getCommonParams(options);
    const genre = options?.genre || 'all-music';
    const endpoint = `/featured_tracks/top/${genre}`;
    return this.#fetchCollection(endpoint, params, {requireTypes: Track});
  }

  async getTracks(ids: number | number[]): Promise<Track[]> {
    const limit = QUERY_MAX_LIMIT;
    const params = await this.#getCommonParams();
    params.linked_partitioning = 0;
    const endpoint = '/tracks';
    if (!Array.isArray(ids) || ids.length <= limit) {
      params.ids = Array.isArray(ids) ? ids.join(',') : ids;
      const collection = await this.#fetchCollection(endpoint, params, {requireTypes: Track});
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
    return this.#fetchCollection(endpoint, params, {requireTypes: Track});
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

  async getFollowing(userId: number, options?: SoundCloudPageOptions) {
    const params = await this.#getCommonParams(options);
    const endpoint = `/users/${userId}/followings`;
    return this.#fetchCollection(endpoint, params, {requireTypes: User});
  }

  /************************************************************/
  /* Search                                                   */
  /************************************************************/

  async search(q: string, options: SoundCloudPageOptions & { type: 'playlist' }): Promise<Collection<Playlist, EntityClasses<Playlist>>>;
  async search(q: string, options: SoundCloudPageOptions & { type: 'album' }): Promise<Collection<Album, EntityClasses<Album>>>;
  async search(q: string, options: SoundCloudPageOptions & { type: 'track' }): Promise<Collection<Track, EntityClasses<Track>>>;
  async search(q: string, options: SoundCloudPageOptions & { type: 'user' }): Promise<Collection<User, EntityClasses<User>>>;
  async search(q: string, options: SoundCloudPageOptions & { type: 'playlist' | 'album' | 'track' | 'user' }): Promise<Collection<EntityType, EntityClasses<EntityType>>> {
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
        return this.#fetchCollection(endpoint, params, {requireTypes: Playlist});
      case 'album':
        endpoint += '/albums';
        return this.#fetchCollection(endpoint, params, {requireTypes: Album});
      case 'track':
        endpoint += '/tracks';
        return this.#fetchCollection(endpoint, params, {requireTypes: Track});
      case 'user':
        endpoint += '/users';
        return this.#fetchCollection(endpoint, params, {requireTypes: User});
      default:
        throw Error(`Unknown search type ${type}`);
    }
  }

  /************************************************************/
  /* My Library                                               */
  /************************************************************/

  async getRecentlyPlayed(type: 'set', options?: SoundCloudPageOptions): Promise<Collection<PlayedSet, EntityClasses<PlayedSet>>>;
  async getRecentlyPlayed(type: 'track', options?: SoundCloudPageOptions): Promise<Collection<PlayedTrack, EntityClasses<PlayedTrack>>>;
  async getRecentlyPlayed(type: 'track' | 'set', options: SoundCloudPageOptions = {}) {
    const params = await this.#getCommonParams(options);
    if (type === 'track') {
      const endpoint = '/me/play-history/tracks';
      return this.#fetchCollection(endpoint, params, {asType: PlayedTrack});
    }
    else if (type === 'set') {
      const endpoint = '/me/play-history/contexts';
      return this.#fetchCollection(endpoint, params, {asType: PlayedSet});
    }
  }

  async getMyProfile() {
    const params = await this.#getCommonParams();
    const endpoint = '/me';
    return this.#fetchEntity(endpoint, params, User);
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

  async #fetchCollection<T extends EntityType, K extends EntityClasses<T>>(
    endpoint: string,
    params: Record<string, any>,
    options: { requireTypes?: K; } | { asType: EntityConstructor<T>; } = {}): Promise<Collection<T, K>>{

    if (params.linked_partitioning === undefined) {
      params.linked_partitioning = 1;
    }
    const json = await this.#fetchEndpoint(endpoint, params);

    if (Reflect.has(options, 'asType')) {
      return CollectionBuilder.buildAs(json, this, Reflect.get(options, 'asType'));
    }

    return CollectionBuilder.build(json, this, Reflect.get(options, 'requireTypes'));
  }

  async #fetchEntity<T extends EntityType, K extends EntityClasses<T>>(
    endpoint: string,
    params: Record<string, any>,
    requireTypes?: K): Promise<EntityClassesToTypes<T, K> | null> {

    const json = await this.#fetchEndpoint(endpoint, params);
    return EntityBuilder.build(json, this, requireTypes);
  }

  async #fetchEndpoint(endpoint: string, params: Record<string, any>) {
    const url = new URL(endpoint, API_BASE_URL);
    for (const [ key, value ] of Object.entries(params)) {
      url.searchParams.set(key, value);
    }
    const res = await fetch(url, {
      headers: this.#getFetchHeaders()
    });
    return res.json();
  }
}
