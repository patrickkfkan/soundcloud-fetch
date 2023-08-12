import SoundCloud from '../SoundCloud.js';
import Entity from './Entity.js';

export default class Publisher extends Entity {

  static type = 'Publisher';

  id?: number;
  artist?: string | null;
  albumTitle?: string | null;
  containsMusic?: boolean;
  UPCOrEAN?: string | null;
  ISRC?: string | null;
  isExplicit?: boolean;
  releaseTitle?: string | null;
  copyrightText: {
    general: {
      p?: string | null;
      c?: string | null;
    };
    display: {
      p?: string | null;
      c?: string | null;
    };
  };
  apiInfo: {
    urn?: string | null;
  };

  constructor(json: any, client: SoundCloud) {
    super(json, client);

    this.id = this.getJSON<number>('id');
    this.artist = this.getJSON<string>('artist');
    this.albumTitle = this.getJSON<string>('album_title');
    this.containsMusic = this.getJSON<boolean>('contains_music');
    this.UPCOrEAN = this.getJSON<string>('upc_or_ean');
    this.ISRC = this.getJSON<string>('isrc');
    this.isExplicit = this.getJSON<boolean>('explicit');
    this.releaseTitle = this.getJSON<string>('release_title');

    this.copyrightText = {
      general: {
        p: this.getJSON<string>('p_line'),
        c: this.getJSON<string>('c_line')
      },
      display: {
        p: this.getJSON<string>('p_line_for_display'),
        c: this.getJSON<string>('c_line_for_display')
      }
    };

    this.apiInfo = {
      urn: this.getJSON<string>('urn')
    };
  }
}
