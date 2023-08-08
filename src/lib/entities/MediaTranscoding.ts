import SoundCloud from '../SoundCloud.js';
import Entity from './Entity.js';

export default class MediaTranscoding extends Entity {

  constructor(json: any, client: SoundCloud) {
    super(json, client);

    Object.defineProperties(this, {
      url: {
        enumerable: true,
        get() {
          return this.#getUrl();
        }
      },
      preset: {
        enumerable: true,
        get() {
          return this.#getPreset();
        }
      },
      duration: {
        enumerable: true,
        get() {
          return this.#getDuration();
        }
      },
      isSnipped: {
        enumerable: true,
        get() {
          return this.#isSnipped();
        }
      },
      protocol: {
        enumerable: true,
        get() {
          return this.#getProtocol();
        }
      },
      mimeType: {
        enumerable: true,
        get() {
          return this.#getMimeType();
        }
      },
      quality: {
        enumerable: true,
        get() {
          return this.#getQuality();
        }
      }
    });
  }

  protected getType() {
    return 'media-transcoding';
  }

  #getUrl() {
    return this.getJSON<string>('url');
  }

  #getPreset() {
    return this.getJSON<string>('preset');
  }

  #getDuration() {
    return this.getJSON<number>('duration');
  }

  #isSnipped() {
    return this.getJSON<boolean>('snipped');
  }

  #getProtocol() {
    const format = this.getJSON<any>('format');
    if (format) {
      return format.protocol as string;
    }
    return undefined;
  }

  #getMimeType() {
    const format = this.getJSON<any>('format');
    if (format) {
      return format.mime_type as string;
    }
    return undefined;
  }

  #getQuality() {
    return this.getJSON<'sq' | 'hq'>('quality');
  }

  get url() {
    return this.#getUrl();
  }

  get preset() {
    return this.#getPreset();
  }

  get duration() {
    return this.#getDuration();
  }

  get isSnipped() {
    return this.#isSnipped();
  }

  get protocol() {
    return this.#getProtocol();
  }

  get mimeType() {
    return this.#getMimeType();
  }

  get quality() {
    return this.#getQuality();
  }
}
