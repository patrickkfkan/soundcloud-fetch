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
    return this.getJSON('id');
  }

  #getTitle() {
    return this.getJSON('title');
  }

  #getNextUri() {
    return this.getJSON('items').next_href;
  }

  #getItems() {
    return this.lazyGet('items', () => {
      return CollectionBuilder.build(this.getJSON('items'), this.getClient()).items;
    });
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
