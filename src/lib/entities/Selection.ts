import SoundCloud from '../SoundCloud.js';
import CollectionBuilder from '../utils/CollectionBuilder.js';
import { EntityType } from '../utils/EntityTypes.js';
import Entity from './Entity.js';

export default class Selection extends Entity {

  static type = 'Selection';

  id?: string | null;
  title?: string | null;
  nextUri?: string | null;
  items: EntityType[];

  constructor(json: any, client: SoundCloud) {
    super(json, client);

    this.id = this.getJSON<string>('id');
    this.title = this.getJSON<string>('title');
    this.nextUri = this.getJSON<any>('items')?.next_href;

    const itemsData = this.getJSON<any>('items');
    if (itemsData) {
      this.items = CollectionBuilder.build(itemsData, this.getClient()).items;
    }
    else {
      this.items = [];
    }
  }
}
