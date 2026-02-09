import { fetch, type Response } from 'undici';
import { API_BASE_URL, type LOCALES, QUERY_MAX_LIMIT, SC_APP_VERSION, USER_AGENT } from './utils/Constants.js';
import Playlist from './entities/Playlist.js';
import Track from './entities/Track.js';
import SystemPlaylist from './entities/SystemPlaylist.js';
import User from './entities/User.js';
import Album from './entities/Album.js';
import {type CollectionOptions} from './collections/Collection.js';
import type Collection from './collections/Collection.js';
import Selection from './entities/Selection.js';
import { type EntityClasses, type EntityClassesToTypes, type EntityType } from './utils/EntityTypes.js';
import CollectionBuilder from './utils/CollectionBuilder.js';
import EntityBuilder from './utils/EntityBuilder.js';
import LibraryItem from './entities/LibraryItem.js';
import PlayHistoryItem from './entities/PlayHistoryItem.js';
import FetchError from './utils/FetchError.js';
import Like from './entities/Like.js';
import type CollectionContinuation from './collections/CollectionContinuation.js';
import { getSoundCloudClientId } from './utils/SoundCloudKey.js';
import { EventContext, sendPlayTrackEvent } from './utils/EventTracking.js';
import { parseCookie } from 'cookie';
import FeedItem, { type FeedActivityType } from './entities/FeedItem.js';

export type SoundCloudInitArgs = {
  clientId?: string;
  locale?: typeof LOCALES[number];
} & ({
    accessToken: string;
    cookie?: never; 
  } | {
    accessToken?: never;
    cookie: string;
  } | {
    accessToken?: never;
    cookie?: never;
  }
);

export interface GetCollectionOptions {
  limit?: number;
}

export interface StreamingData {
  url: string;
  licenseAuthToken?: string;
}

export default class SoundCloud {

  me: {
    getProfile: SoundCloud['getMyProfile'];
    getFeed: SoundCloud['getFeed'];
    getPlayHistory: SoundCloud['getPlayHistory'];
    getLibraryItems: SoundCloud['getLibraryItems'];
    getLikes: SoundCloud['getMyLikes'];
    getStations: SoundCloud['getMyStations'];
    getFollowing: SoundCloud['getMyFollowing'];
    addToPlayHistory: SoundCloud['addToPlayHistory'];
  };

  #clientId?: string;
  #accessToken: string | null = null;
  #cookie: string | null = null;
  #locale?: string;
  #eventContext: EventContext;

  constructor(args?: SoundCloudInitArgs) {
    if (args?.accessToken && args?.cookie) {
      throw Error(`Args cannot have both 'accessToken' and 'cookie'`);
    }
    this.#eventContext = new EventContext();
    if (args?.clientId) this.#clientId = args.clientId;
    if (args?.cookie) {
      this.setCookie(args.cookie);
    }
    if (args?.accessToken) {
      this.setAccessToken(args.accessToken);
    }
    if (args?.locale) this.#locale = args.locale;

    this.me = {
      getProfile: this.getMyProfile.bind(this),
      getFeed: this.getFeed.bind(this),
      getPlayHistory: this.getPlayHistory.bind(this),
      getLibraryItems: this.getLibraryItems.bind(this),
      getLikes: this.getMyLikes.bind(this),
      getStations: this.getMyStations.bind(this),
      getFollowing: this.getMyFollowing.bind(this),
      addToPlayHistory: this.addToPlayHistory.bind(this)
    };
  }

  #getAccessTokenFromCookie(value: string) {
    const cookieObj = parseCookie(value);
    return typeof cookieObj['oauth_token'] === 'string' ? cookieObj['oauth_token'] : null;
  }

  async getClientId(): Promise<string> {
    if (!this.#clientId) {
      this.#clientId = await SoundCloud.generateClientId();
    }
    return this.#clientId;
  }

  static async generateClientId(): Promise<string> {
    return getSoundCloudClientId();
  }

  getLocale() {
    return this.#locale;
  }

  setLocale(locale?: string) {
    this.#locale = locale;
  }

  setAccessToken(value?: string) {
    if (value === this.#accessToken) {
      return;
    }
    this.#accessToken = value || null;
    this.#cookie = null;
    this.#eventContext.setCookie(null);
  }

  setCookie(value?: string) {
    if (value === this.#cookie) {
      return;
    }
    this.#cookie = value || null;
    this.#accessToken = value ? this.#getAccessTokenFromCookie(value) : null;
    this.#eventContext.setCookie(value);
  }

  #getFetchHeaders(method: 'POST' | 'GET' = 'GET'): Headers {
    // From soundcloud.ts (https://github.com/Tenpi/soundcloud.ts)
    const headers = new Headers({
      Origin: 'https://soundcloud.com',
      Referer: 'https://soundcloud.com/',
      'User-Agent': USER_AGENT
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

  async getMixedSelections(options?: GetCollectionOptions) {
    const params = await this.#getCommonParams(options);
    const endpoint = '/mixed-selections';
    return this.#fetchCollection(endpoint, params, { requireTypes: Selection });
  }

  async getCharts() {
    const params = await this.#getCommonParams();
    const endpoint = '/charts/selections';
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

  async getPlaylistsByUser(userId: number, options?: GetCollectionOptions) {
    const params = await this.#getCommonParams(options);
    const endpoint = `/users/${userId}/playlists_without_albums`;
    return this.#fetchCollection(endpoint, params, {requireTypes: Playlist});
  }

  async getAlbumsByUser(userId: number, options?: GetCollectionOptions) {
    const params = await this.#getCommonParams(options);
    const endpoint = `/users/${userId}/albums`;
    return this.#fetchCollection(endpoint, params, {requireTypes: Album});
  }

  /************************************************************/
  /* Track                                                    */
  /************************************************************/

  async getTopFeaturedTracks(options?: GetCollectionOptions & { genre?: string }) {
    const params = await this.#getCommonParams(options);
    const genre = options?.genre || 'all-music';
    const endpoint = `/featured_tracks/top/${genre}`;
    return this.#fetchCollection(endpoint, params, {requireTypes: Track});
  }

  async getTracks(ids: number | number[]): Promise<Track[]> {
    if (Array.isArray(ids) && ids.length === 0) {
      return [];
    }
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

  async getTracksByUser(userId: number, options?: GetCollectionOptions) {
    const params = await this.#getCommonParams(options);
    params.representation = 'full';
    const endpoint = `/users/${userId}/tracks`;
    return this.#fetchCollection(endpoint, params, {requireTypes: Track});
  }

  async getTrack(id: number): Promise<Track | null> {
    const tracks = await this.getTracks(id);
    return tracks[0] || null;
  }

  /**
   * @deprecated Use getStreamingData() instead.
   * @param transcodingUrl 
   * @returns 
   */
  async getStreamingUrl(transcodingUrl: string): Promise<string | null> {
    const params = await this.#getCommonParams();
    const json = await this.#fetchEndpoint(transcodingUrl, params);
    if (json && Reflect.has(json, 'url') && typeof json.url === 'string') {
      return json.url;
    }
    return null;
  }

  async getStreamingData(
    options: {
      transcodingUrl: string;
      trackAuthorization?: string
    }
  ): Promise<StreamingData | null> {
    const params = await this.#getCommonParams();
    if (options.trackAuthorization) {
      params.track_authorization = options.trackAuthorization;
    }
    const json = await this.#fetchEndpoint(options.transcodingUrl, params);
    let url: string | undefined = undefined;
    let token:string | undefined = undefined;
    if (json && Reflect.has(json, 'url') && typeof json.url === 'string') {
      url = json.url as string;
    }
    if (json && Reflect.has(json, 'licenseAuthToken') && typeof json.licenseAuthToken	 === 'string') {
      token = json.licenseAuthToken as string;
    }
    return url ? {
      url,
      licenseAuthToken: token
    } : null;
  }

  /************************************************************/
  /* User                                                     */
  /************************************************************/

  async getUser(id: number) {
    const params = await this.#getCommonParams();
    const endpoint = `/users/${id}`;
    return this.#fetchEntity(endpoint, params, User);
  }

  async getFollowing(userId: number, options?: GetCollectionOptions) {
    const params = await this.#getCommonParams(options);
    const endpoint = `/users/${userId}/followings`;
    return this.#fetchCollection(endpoint, params, {requireTypes: User});
  }

  /************************************************************/
  /* Search                                                   */
  /************************************************************/

  async search(q: string, options: GetCollectionOptions & { type: 'playlist' }): Promise<Collection<Playlist>>;
  async search(q: string, options: GetCollectionOptions & { type: 'album' }): Promise<Collection<Album>>;
  async search(q: string, options: GetCollectionOptions & { type: 'track' }): Promise<Collection<Track>>;
  async search(q: string, options: GetCollectionOptions & { type: 'user' }): Promise<Collection<User>>;
  async search(q: string, options: GetCollectionOptions & { type: 'playlist' | 'album' | 'track' | 'user' }): Promise<Collection<EntityType>> {
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

  async getLikesByUser(userId: number, options: GetCollectionOptions & {type: 'track' | 'playlistAndAlbum'}) {
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

  protected async getFeed(options?: GetCollectionOptions & { activityTypes?: FeedActivityType[] }) {
    this.#ensureAccessToken();
    const activityTypes = options?.activityTypes ?? ['TrackPost', 'TrackRepost', 'PlaylistPost'];
    const params = await this.#getCommonParams(options);
    params.activityTypes = activityTypes.join(',');
    params.promoted_playlist = 'true';
    const endpoint = '/stream';

    return this.#fetchCollection(endpoint, params, {asType: FeedItem});
  }

  protected async getPlayHistory(options: GetCollectionOptions & {type: 'track' | 'set'}) {
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
    }

    return this.#fetchCollection(endpoint, params, {asType: PlayHistoryItem});
  }

  protected async getMyProfile() {
    this.#ensureAccessToken();
    const params = await this.#getCommonParams();
    const endpoint = '/me';
    return this.#fetchEntity(endpoint, params, User);
  }

  protected async getLibraryItems(options?: GetCollectionOptions) {
    this.#ensureAccessToken();
    const params = await this.#getCommonParams(options);
    const endpoint = '/me/library/all';
    return this.#fetchCollection(endpoint, params, {asType: LibraryItem});
  }

  protected async getMyStations(options?: GetCollectionOptions) {
    this.#ensureAccessToken();
    const params = await this.#getCommonParams(options);
    const endpoint = '/me/library/stations';
    return this.#fetchCollection(endpoint, params, {asType: LibraryItem});
  }

  protected async getMyLikes(options: GetCollectionOptions & {type: 'track' | 'playlistAndAlbum'}) {
    const { type } = options;
    const myProfile = await this.getMyProfile();
    if (myProfile?.id !== undefined) {
      return this.getLikesByUser(myProfile.id, { ...options, type });
    }
    throw Error('Profile or ID not found');
  }

  protected async getMyFollowing(options?: GetCollectionOptions) {
    const myProfile = await this.getMyProfile();
    if (myProfile?.id !== undefined) {
      return this.getFollowing(myProfile.id, options);
    }
    throw Error('Profile or ID not found');
  }

  protected async addToPlayHistory(
    trackOrUrn: Track | string,
    setOrUrn?: Album | Playlist | SystemPlaylist | string,
    callbacks?: {
      onSendPlayTrackEventError: (err: Error) => boolean;
    }
  ) {
    const cbSendPlayTrackEventError =
      callbacks?.onSendPlayTrackEventError ?? ((_) => false);
    
    // Get track data so we can send "play" event to SC
    let track;
    if (trackOrUrn instanceof Track) {
      track = trackOrUrn;
    }
    else {
      const trackId = Number(trackOrUrn.split(':')[2]);
      if (isNaN(trackId)) {
        throw Error('Invalid track URN');
      }
      try {
        track = await this.getTrack(trackId);
      }
      catch (error: unknown) {
        const errMsg = error instanceof Error ? error.message : String(error);
        throw Error(`Error fetching track data: ${errMsg}`, { cause: error })
      }
      if (!track) {
        throw Error('Track not found');
      }
    }

    // Send play track event
    try {
      await sendPlayTrackEvent(
        await this.getClientId(),
        this.#eventContext,
        track
      );
    }
    catch (error: unknown) {
      const e = error instanceof Error ? error : Error(String(error));
      if (!cbSendPlayTrackEventError(e)) {
        return false;
      }
    }

    // Send request to add to play history
    const trackUrn = trackOrUrn instanceof Track ? trackOrUrn.apiInfo.urn : trackOrUrn;
    if (!trackUrn) {
      throw Error('Track is missing URN');
    }
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
    const params = this.#getCommonParams();
    const endpoint = '/me/play-history';
    const payload: Record<string, any> = {
      track_urn: trackUrn
    };
    if (contextUrn) {
      payload.context_urn = contextUrn;
    }
    await this.#postToEndpoint(endpoint, params, payload);
    return true;
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

  async #getCommonParams(options: GetCollectionOptions = {}): Promise<Record<string, any>> {
    const clientId = await this.getClientId();
    const params: Record<string, any> = {
      client_id: clientId,
      app_version: SC_APP_VERSION
    };
    if (options.limit) {
      params.limit = options.limit;
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
    return await res.json() as any;
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
