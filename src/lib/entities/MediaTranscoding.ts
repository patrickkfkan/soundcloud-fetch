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
    return this.getJSON('url');
  }

  #getPreset() {
    return this.getJSON('preset');
  }

  #getDuration() {
    return this.getJSON('duration');
  }

  #isSnipped() {
    return this.getJSON('snipped');
  }

  #getProtocol() {
    const format = this.getJSON('format');
    if (format) {
      return format.protocol;
    }
    return null;
  }

  #getMimeType() {
    const format = this.getJSON('format');
    if (format) {
      return format.mime_type;
    }
    return null;
  }

  #getQuality() {
    return this.getJSON('quality');
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
