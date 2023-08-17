import SoundCloud from '../SoundCloud.js';
import Entity from './Entity.js';

export default class MediaTranscoding extends Entity {

  static type = 'MediaTranscoding';

  url?: string | null;
  preset?: string | null;
  duration?: number;
  isSnipped?: boolean;
  protocol?: string | null;
  mimeType?: string | null;
  quality?: 'sq' | 'hq' | null;


  constructor(json: any, client: SoundCloud) {
    super(json, client);

    this.url = this.getJSON<string>('url');
    this.preset = this.getJSON<string>('preset');
    this.duration = this.getJSON<number>('duration');
    this.isSnipped = this.getJSON<boolean>('snipped');

    const format = this.getJSON<any>('format');
    if (format) {
      this.protocol = format.protocol;
      this.mimeType = format.mime_type;
    }

    this.quality = this.getJSON<'sq' | 'hq'>('quality');
  }
}
