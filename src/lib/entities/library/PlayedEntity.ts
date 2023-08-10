import SoundCloud from '../../SoundCloud.js';
import { EntityType } from '../../utils/EntityTypes.js';
import Entity from '../Entity.js';

export default abstract class PlayedEntity<T extends EntityType> extends Entity {

  constructor(json: any, client: SoundCloud) {
    super(json, client);

    Object.defineProperties(this, {
      playedAt: {
        enumerable: true,
        get() {
          return this.#getPlayedAt();
        }
      },
      item: {
        enumerable: true,
        get() {
          return this.getItem();
        }
      }
    });
  }

  protected abstract getItem(): T | null;

  #getPlayedAt() {
    return this.getJSON<number>('played_at');
  }

  get playedAt() {
    return this.#getPlayedAt();
  }

  get item() {
    return this.getItem();
  }
}
