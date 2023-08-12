import SoundCloud from '../dist/mjs/index.js';
import { print } from './utils/output.js';

const scfetch = new SoundCloud();

scfetch.search('Hello', { type: 'album' }).then((albums) => {
  print(albums);
});
