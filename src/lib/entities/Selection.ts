import SoundCloud from '../SoundCloud.js';
import CollectionBuilder from '../utils/CollectionBuilder.js';
import Entity from './Entity.js';

export default class Selection extends Entity {

  constructor(json: any, client: SoundCloud) {
    super(json, client);

    Object.defineProperties(this, {
      id: {
        enumerable: true,
        get() {
          return this.#getId();
        }
      },
      title: {
        enumerable: true,
        get() {
          return this.#getTitle();
        }
      },
      nextUri: {
        enumerable: true,
        get() {
          return this.#getNextUri();
        }
      },
      items: {
        enumerable: true,
        get() {
          return this.#getItems();
        }
      }
    });
  }

  protected getType() {
    return 'selection';
  }

  #getId() {
    return this.getJSON<string>('id');
  }

  #getTitle() {
    return this.getJSON<string>('title');
  }

  #getNextUri() {
    return this.getJSON<any>('items')?.next_href as string | null | undefined;
  }

  #getItems() {
    return this.lazyGet('items', () => {
      const itemsData = this.getJSON<any>('items');
      if (itemsData) {
        return CollectionBuilder.build(itemsData, this.getClient()).items;
      }
      return undefined;
    }) || [];
  }

  get id() {
    return this.#getId();
  }

  get title() {
    return this.#getTitle();
  }

  get nextUri() {
    return this.#getNextUri();
  }

  get items() {
    return this.#getItems();
  }
}
