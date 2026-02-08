import _ from 'lodash';
import { parseCookie } from 'cookie';
import { fetch } from 'undici';
import { API_BASE_URL, SC_APP_VERSION, USER_AGENT, WEB_URL } from './Constants.js';
import { type Track } from '../entities';

const EVENT_CONTEXT_CLIENT_ID = 46941;
const EVENT_ENDPOINT = `${API_BASE_URL}/me`;

async function getEventContextFromCookie(cookieString: string): Promise<EventContextValue | null> {
  const cookieObj = parseCookie(cookieString);
  const parsed: Partial<EventContextValue> = {
    clientId: EVENT_CONTEXT_CLIENT_ID
  };

  parsed.authToken = typeof cookieObj['oauth_token'] === 'string' ? cookieObj['oauth_token'] : undefined;
  parsed.anonymousId = typeof cookieObj['sc_anonymous_id'] === 'string' ? cookieObj['sc_anonymous_id'] : undefined;

  if (typeof cookieObj['sc_session'] === 'string') {
    try {
      const sessionObj = JSON.parse(cookieObj['sc_session']);
      if (sessionObj && typeof sessionObj === 'object' && typeof sessionObj.id === 'string') {
        parsed.sessionId = sessionObj.id;
      }
    }
    catch (_) {
      parsed.sessionId = undefined;
    }
  }

  if (typeof cookieObj['sc_tracking_user_id'] === 'string') {
    const rawValue = cookieObj['sc_tracking_user_id'];
    if (rawValue.startsWith('"') && rawValue.endsWith('"')) {
      parsed.user = rawValue.substring(1, rawValue.length - 1);
    }
    else {
      parsed.user = rawValue;
    }
  }

  const res = await fetch(WEB_URL, {
    headers: {
      Cookie: cookieString,
      'User-Agent': USER_AGENT
    }
  });
  const page = await res.text();
  const analyticsIdMatch = page.match(/"analytics_id":"([^"]+)"/);
  if (analyticsIdMatch && analyticsIdMatch[1]) {
    parsed.analyticsId = analyticsIdMatch[1];
  }

  const keys: (keyof EventContextValue)[] = [
    'analyticsId',
    'anonymousId',
    'authToken',
    'clientId',
    'sessionId',
    'user'
  ];
  const missing = keys.reduce<string[]>((result, key) => {
    if (!parsed[key]) {
      result.push(`"${key}"`);
    }
    return result;
  }, []);

  if (missing.length > 0) {
    throw Error(`EventContext missing ${missing.join(', ')}`);
  }


  return parsed as EventContextValue;
}

interface EventContextValue {
  authToken: string;
  anonymousId: string;
  clientId: number;
  sessionId: string;
  user: string;
  analyticsId: string;
}

export class EventContext {
  #cookie?: string | null;
  #value: EventContextValue | null;
  #invalidated = true;
  #lastError: Error | null = null;

  constructor(cookie?: string | null) {
    this.#cookie = cookie;
  }

  setCookie(cookie: string | undefined | null) {
    if (cookie === this.#cookie) {
      return;
    }
    this.#cookie = cookie;
    this.#invalidated = true;
    this.#lastError = null;
  }

  async getValue() {
    if (this.#lastError) {
      throw this.#lastError;
    }
    if (!this.#invalidated) {
      return this.#value;
    }
    this.#invalidated = false;
    if (!this.#cookie) {
      this.#value = null;
      this.#lastError = Error('EventContext unavailable - cookie required but not provided')
      throw this.#lastError;
    }
    try {
      this.#value = await getEventContextFromCookie(this.#cookie);
    }
    catch (error: unknown) {
      this.#value = null;
      this.#lastError = error instanceof Error ? error : Error(String(error));
      throw error;
    }
    return this.#value;
  }
}

export async function sendPlayTrackEvent(
  clientId: string,
  context: EventContext,
  track: Track
) {
  const contextValue = await context.getValue();
  if (!contextValue) {
    throw Error('EventContext unavailable');
  }
  const {
    authToken,
    anonymousId,
    sessionId,
    user,
    analyticsId
  } = contextValue;
  
  const trackUrn = track.apiInfo.urn;
  const trackAuthorization = track.mediaInfo.trackAuthorization;
  const trackOwner = track.user?.apiInfo.urn;
  if (!trackUrn || !trackAuthorization || !trackOwner) {
    throw Error('Incomplete track data');
  }
  
  const { preset, quality, protocol, duration } = track.mediaInfo.transcodings?.[0] ?? {};
  const ts = Date.now();

  const payload = {
    "events": [
      {
        "event": "audio_performance",
        "version": "v0.0.0",
        "payload": {
          "type": "play",
          "latency": _.random(300, 999),
          "protocol": protocol ?? undefined,
          "preloaded": "no",
          "app_state": "foreground",
          "track_urn": trackUrn,
          "preset": preset ?? undefined,
          "quality": quality ?? undefined,
          "entity_type": "soundcloud",
          "anonymous_id": anonymousId,
          "ts": ts,
          "session_id": sessionId,
          "analytics_id": analyticsId,
          "app_version": SC_APP_VERSION,
          "user": user
        }
      },
      {
        "event": "audio",
        "version": "v1.27.17",
        "payload": {
          "track_length": duration ?? undefined,
          "track_authorization": trackAuthorization,
          "player_type": "MaestroHLSMSE",
          "preset": preset ?? undefined,
          "quality": quality ?? undefined,
          "app_state": "foreground",
          "action": "play",
          "trigger": "manual",
          "track": trackUrn,
          "track_owner": trackOwner,
          "playhead_position": 0,
          "anonymous_id": anonymousId,
          "client_id": contextValue.clientId,
          "ts": ts,
          "session_id": sessionId,
          "analytics_id": analyticsId,
          "app_version": SC_APP_VERSION,
          "user": user
        }
      }
    ],
    "auth_token": authToken
  }

  const endpoint = new URL(EVENT_ENDPOINT);
  endpoint.searchParams.set('client_id', clientId);

  const res = await fetch(endpoint, {
    "headers": {
      "User-Agent": USER_AGENT,
      "Accept": "*/*",
      "Accept-Language": "en-US,en;q=0.5",
      "Content-Type": "text/plain;charset=UTF-8"
    },
    "referrer": "https://soundcloud.com/",
    "body": JSON.stringify(payload),
    "method": "POST"
  });

  if (!res.ok) {
    throw Error(`${res.status} - ${res.statusText}`);
  }
}