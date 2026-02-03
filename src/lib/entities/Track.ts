import type SoundCloud from '../SoundCloud.js';
import Entity, { type ArtworkImageUrls } from './Entity.js';
import MediaTranscoding from './MediaTranscoding.js';
import Publisher from './Publisher.js';
import User from './User.js';

export default class Track extends Entity {

  static type = 'Track';

  id?: number;
  texts: {
    title?: string | null;
    description?: string | null;
    caption?: string | null;
  };
  dates: {
    created?: string | null;
    released?: string | null;
    modified?: string | null;
    display?: string | null;
  };
  downloadInfo: {
    downloadable?: boolean;
    downloadCount?: number;
    hasDownloadsLeft?: boolean;
  };
  socialInfo: {
    commentable?: boolean;
    commentCount?: number;
    likesCount?: number;
    repostsCount?: number;
  };
  sharingInfo: {
    shareability?: string | null;
    embeddableBy?: string | null;
    secretToken?: string | null;
  };
  playbackInfo: {
    playbackCount?: number;
    policy?: string | null;
  };
  isBlocked?: boolean;
  isSnipped?: boolean;
  mediaInfo: {
    trackFormat?: string | null;
    encodingState?: string | null;
    transcodings: MediaTranscoding[];
  };
  permalink: {
    basic?: string | null;
    full?: string | null;
  };
  apiInfo: {
    streamable?: boolean;
    uri?: string | null;
    urn?: string | null;
  };
  purchaseInfo: {
    title?: string | null;
    url?: string | null;
  };
  publisher?: Publisher;
  durations: {
    full?: number;
    playback?: number;
  };
  genre?: string | null;
  license?: string | null;
  isPublic?: boolean;
  tags?: string | null;
  label?: string | null;
  artwork?: ArtworkImageUrls;
  waveform?: string | null;
  user?: User;

  constructor(json: any, client: SoundCloud) {
    super(json, client);

    this.id = this.getJSON<number>('id');

    this.texts = {
      title: this.getJSON<string>('title'),
      description: this.getJSON<string>('description'),
      caption: this.getJSON<string>('caption')
    };

    this.dates = {
      created: this.getJSON<string>('created_at'),
      released: this.getJSON<string>('release_date'),
      modified: this.getJSON<string>('last_modified'),
      display: this.getJSON<string>('display_date')
    };

    this.downloadInfo = {
      downloadable: this.getJSON<boolean>('downloadable'),
      downloadCount: this.getJSON<number>('download_count'),
      hasDownloadsLeft: this.getJSON<boolean>('has_downloads_left')
    };

    this.socialInfo = {
      commentable: this.getJSON<boolean>('commentable'),
      commentCount: this.getJSON<number>('comment_count'),
      likesCount: this.getJSON<number>('likes_count'),
      repostsCount: this.getJSON<number>('reposts_count')
    };

    this.sharingInfo = {
      shareability: this.getJSON<string>('sharing'),
      embeddableBy: this.getJSON<string>('embeddable_by'),
      secretToken: this.getJSON<string>('secret_token')
    };

    this.playbackInfo = {
      playbackCount: this.getJSON<number>('playback_count'),
      policy: this.getJSON<string>('policy')
    };

    this.isBlocked = this.playbackInfo.policy === 'BLOCK';
    this.isSnipped = this.playbackInfo?.policy === 'SNIP';

    const transcodingData = this.getJSON<any>('media').transcodings;
    this.mediaInfo = {
      trackFormat: this.getJSON<string>('track_format'),
      encodingState: this.getJSON<string>('state'),
      transcodings: this.#parseTranscodings(transcodingData)
    };

    this.permalink = {
      basic: this.getJSON<string>('permalink'),
      full: this.getJSON<string>('permalink_url')
    };

    this.apiInfo = {
      streamable: this.getJSON<boolean>('streamable'),
      uri: this.getJSON<string>('uri'),
      urn: this.getJSON<string>('urn')
    };

    this.purchaseInfo = {
      title: this.getJSON<string>('purchase_title'),
      url: this.getJSON<string>('purchase_url')
    };

    const publisherData = this.getJSON<any>('publisher_metadata');
    if (publisherData) {
      this.publisher = new Publisher(publisherData, this.getClient());
    }

    this.durations = {
      full: this.getJSON<number>('full_duration'),
      playback: this.getJSON<number>('duration')
    };

    this.genre = this.getJSON<string>('genre');
    this.license = this.getJSON<string>('license');
    this.isPublic = this.getJSON<boolean>('public');
    this.tags = this.getJSON<string>('tag_list');
    this.label = this.getJSON<string>('label_name');
    this.artwork = this.getImageUrls(this.getJSON<string>('artwork_url'));
    this.waveform = this.getJSON<string>('waveform_url');

    const userData = this.getJSON<any>('user');
    if (userData) {
      this.user = new User(userData, this.getClient());
    }
  }

  #parseTranscodings(transcodings: any): MediaTranscoding[] {
    if (Array.isArray(transcodings)) {
      return transcodings.map((t: any) => new MediaTranscoding(t, this.getClient()));
    }
    return [];
  }
}
