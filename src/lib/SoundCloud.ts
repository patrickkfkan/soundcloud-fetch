import fetch, { Headers, Response } from 'node-fetch';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import sckey from 'soundcloud-key-fetch';
import { API_BASE_URL, QUERY_MAX_LIMIT } from './utils/Constants.js';
import Playlist from './entities/Playlist.js';
import Track from './entities/Track.js';
import SystemPlaylist from './entities/SystemPlaylist.js';
import User from './entities/User.js';
import Album from './entities/Album.js';
import Collection, { CollectionOptions } from './collections/Collection.js';
import Selection from './entities/Selection.js';
import { EntityClasses, EntityClassesToTypes, EntityType } from './utils/EntityTypes.js';
import CollectionBuilder from './utils/CollectionBuilder.js';
import EntityBuilder from './utils/EntityBuilder.js';
import LibraryItem from './entities/LibraryItem.js';
import PlayHistoryItem from './entities/PlayHistoryItem.js';
import FetchError from './utils/FetchError.js';
import Like from './entities/Like.js';
import CollectionContinuation from './collections/CollectionContinuation.js';

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

  me: {
    getProfile: SoundCloud['getMyProfile'];
    getPlayHistory: SoundCloud['getPlayHistory'];
    getLibraryItems: SoundCloud['getLibraryItems'];
    getLikes: SoundCloud['getMyLikes'];
    getStations: SoundCloud['getMyStations'];
    addToPlayHistory: SoundCloud['addToPlayHistory'];
  };

  #clientId?: string;
  #accessToken?: string;
  #locale?: string;

  constructor(args?: SoundCloudInitArgs) {
    if (args?.clientId) this.#clientId = args.clientId;
    if (args?.accessToken) this.#accessToken = args.accessToken;
    if (args?.locale) this.#locale = args.locale;

    this.me = {
      getProfile: this.getMyProfile.bind(this),
      getPlayHistory: this.getPlayHistory.bind(this),
      getLibraryItems: this.getLibraryItems.bind(this),
      getLikes: this.getMyLikes.bind(this),
      getStations: this.getMyStations.bind(this),
      addToPlayHistory: this.addToPlayHistory.bind(this)
    };
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

  setAccessToken(value?: string) {
    this.#accessToken = value;
  }

  #getFetchHeaders(method: 'POST' | 'GET' = 'GET'): Headers {
    // From soundcloud.ts (https://github.com/Tenpi/soundcloud.ts)
    const headers = new Headers({
      Origin: 'https://soundcloud.com',
      Referer: 'https://soundcloud.com/',
      'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36 Edg/114.0.1823.67'
    });

    if (method === 'POST') {
      headers.set('Content-Type', 'application/json');
    }

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

  async getPlaylistOrAlbum(id: number): Promise<Album | Playlist | null> {
    const params = await this.#getCommonParams();
    params.representation = 'full';
    const endpoint = `/playlists/${id}`;
    return this.#fetchEntity(endpoint, params, [ Album, Playlist ]);
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

  async getStreamingUrl(transcodingUrl: string): Promise<string | null> {
    const params = await this.#getCommonParams();
    const url = new URL(transcodingUrl);
    for (const [ key, value ] of Object.entries(params)) {
      url.searchParams.set(key, value);
    }
    const res = await fetch(url);
    this.#validateFetchResponse(res);
    const json = await res.json();
    if (json && Reflect.has(json, 'url') && typeof json.url === 'string') {
      return json.url;
    }
    return null;
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

  async search(q: string, options: SoundCloudPageOptions & { type: 'playlist' }): Promise<Collection<Playlist>>;
  async search(q: string, options: SoundCloudPageOptions & { type: 'album' }): Promise<Collection<Album>>;
  async search(q: string, options: SoundCloudPageOptions & { type: 'track' }): Promise<Collection<Track>>;
  async search(q: string, options: SoundCloudPageOptions & { type: 'user' }): Promise<Collection<User>>;
  async search(q: string, options: SoundCloudPageOptions & { type: 'playlist' | 'album' | 'track' | 'user' }): Promise<Collection<EntityType>> {
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
        throw new TypeError(`Invalid type ${type}`);
    }
  }

  /************************************************************/
  /* Likes                                                    */
  /************************************************************/

  async getLikesByUser(userId: number, options: SoundCloudPageOptions & {type: 'track' | 'playlistAndAlbum'}) {
    const params = await this.#getCommonParams(options);
    const { type } = options;
    let endpoint;
    switch (type) {
      case 'track':
        endpoint = `/users/${userId}/track_likes`;
        break;
      case 'playlistAndAlbum':
        endpoint = `/users/${userId}/playlist_likes`;
        break;
      default:
        throw new TypeError(`Invalid type '${type}'`);
    }

    return this.#fetchCollection(endpoint, params, { requireTypes: Like });
  }

  /************************************************************/
  /* 'Me' stuff                                               */
  /************************************************************/

  #ensureAccessToken() {
    if (!this.#accessToken) {
      throw new Error('Access token not provided');
    }
  }

  protected async getPlayHistory(options: SoundCloudPageOptions & {type: 'track' | 'set'}) {
    this.#ensureAccessToken();
    const params = await this.#getCommonParams(options);
    const { type } = options;
    let endpoint;
    switch (type) {
      case 'track':
        endpoint = '/me/play-history/tracks';
        break;
      case 'set':
        endpoint = '/me/play-history/contexts';
        break;
      default:
        throw new TypeError(`Invalid type '${type}'`);
    }

    return this.#fetchCollection(endpoint, params, {asType: PlayHistoryItem});
  }

  protected async getMyProfile() {
    this.#ensureAccessToken();
    const params = await this.#getCommonParams();
    const endpoint = '/me';
    return this.#fetchEntity(endpoint, params, User);
  }

  protected async getLibraryItems(options?: SoundCloudPageOptions) {
    this.#ensureAccessToken();
    const params = await this.#getCommonParams(options);
    const endpoint = '/me/library/all';
    return this.#fetchCollection(endpoint, params, {asType: LibraryItem});
  }

  protected async getMyStations(options?: SoundCloudPageOptions) {
    this.#ensureAccessToken();
    const params = await this.#getCommonParams(options);
    const endpoint = '/me/library/stations';
    return this.#fetchCollection(endpoint, params, {asType: LibraryItem});
  }

  protected async getMyLikes(options: SoundCloudPageOptions & {type: 'track' | 'playlistAndAlbum'}) {
    const { type } = options;
    if (type === 'track' || type === 'playlistAndAlbum') {
      const myProfile = await this.getMyProfile();
      if (myProfile?.id !== undefined) {
        return this.getLikesByUser(myProfile.id, { ...options, type });
      }
      throw Error('Profile or ID not found');
    }
    throw new TypeError(`Invalid type '${type}'`);
  }

  protected async addToPlayHistory(trackOrUrn: Track | string, setOrUrn?: Album | Playlist | SystemPlaylist | string) {
    const trackUrn = trackOrUrn instanceof Track ? trackOrUrn.apiInfo.urn : trackOrUrn;
    let contextUrn;
    if (typeof setOrUrn === 'string') {
      contextUrn = setOrUrn;
    }
    else if (setOrUrn instanceof SystemPlaylist) {
      contextUrn = setOrUrn.apiInfo.urn;
    }
    else if ((setOrUrn instanceof Album || setOrUrn instanceof Playlist) && setOrUrn.id) {
      contextUrn = `soundcloud:playlists:${setOrUrn.id}`;
    }
    else {
      contextUrn = null;
    }
    if (trackUrn) {
      const params = this.#getCommonParams();
      const endpoint = '/me/play-history';
      const payload: Record<string, any> = {
        track_urn: trackUrn
      };
      if (contextUrn) {
        payload.context_urn = contextUrn;
      }
      return this.#postToEndpoint(endpoint, params, payload);
    }
  }

  /************************************************************/
  /* Misc                                                     */
  /************************************************************/

  async getContinuation<T extends EntityType>(continuation: CollectionContinuation<T>) {
    const params = await this.#getCommonParams();
    const { uri, opts } = continuation;
    return this.#fetchCollection(uri, params, opts);
  }

  /************************************************************/
  /* Internal                                                 */
  /************************************************************/

  async #getCommonParams(options: SoundCloudPageOptions = {}): Promise<Record<string, any>> {
    const clientId = await this.getClientId();
    const params: Record<string, any> = {
      client_id: clientId,
      app_version: '1692105952'
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

  async #fetchCollection<T extends EntityType>(
    endpoint: string,
    params: Record<string, any>,
    options: CollectionOptions<T> = {}): Promise<Collection<T>>{

    if (params.linked_partitioning === undefined) {
      params.linked_partitioning = 1;
    }
    const json = await this.#fetchEndpoint(endpoint, params);

    if (options.asType) {
      return CollectionBuilder.buildAs(json, this, options.asType);
    }

    return CollectionBuilder.build(json, this, options.requireTypes);
  }

  async #fetchEntity<T extends EntityType, K extends EntityClasses<T>>(
    endpoint: string,
    params: Record<string, any>,
    requireTypes?: K): Promise<EntityClassesToTypes<K> | null> {

    const json = await this.#fetchEndpoint(endpoint, params);
    return EntityBuilder.build(json, this, requireTypes);
  }

  async #fetchEndpoint(endpoint: string, params: Record<string, any>) {
    const res = await fetch(this.#buildEndpointURL(endpoint, params), {
      headers: this.#getFetchHeaders()
    });
    this.#validateFetchResponse(res);
    return res.json();
  }

  async #postToEndpoint(endpoint: string, params: Record<string, any>, payload: Record<string, any>) {
    const res = await fetch(this.#buildEndpointURL(endpoint, params), {
      headers: this.#getFetchHeaders('POST'),
      method: 'POST',
      body: JSON.stringify(payload)
    });
    this.#validateFetchResponse(res);
    if (res.status === 204) {
      return true;
    }
    return res.json();
  }

  #buildEndpointURL(endpoint: string, params: Record<string, any>) {
    const url = new URL(endpoint, API_BASE_URL);
    for (const [ key, value ] of Object.entries(params)) {
      url.searchParams.set(key, value);
    }
    return url;
  }

  #validateFetchResponse(res: Response) {
    if (res.ok) {
      return true;
    }
    throw new FetchError(res.status, res.statusText);
  }
}
