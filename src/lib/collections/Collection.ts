import SoundCloud from '../SoundCloud.js';
import { EntityClasses, EntityClassesToTypes, EntityType } from '../utils/EntityTypes.js';

export default abstract class Collection<T extends EntityType, K extends EntityClasses<T>, V = any> {

  static readonly type: string = 'Collection';
  readonly type: string;

  items: EntityClassesToTypes<T, K>[];
  nextUri?: string | null;

  #json: any;
  #client: SoundCloud;

  constructor(json: any, client: SoundCloud, opts: V) {
    this.#json = json;
    this.#client = client;

    this.items = this.getItems(opts);
    this.nextUri = this.getJSON<string>('next_href');
  }

  protected abstract getItems(opts: V): EntityClassesToTypes<T, K>[];

  getJSON(prop?: undefined): any;
  getJSON<T extends string>(prop: string): T | null | undefined;
  getJSON<T>(prop: string): T | undefined;
  getJSON(prop?: string): any {
    if (!prop) {
      return this.#json;
    }
    return this.#json[prop] !== undefined ? this.#json[prop] : undefined;
  }

  protected getClient() {
    return this.#client;
  }
}
