import SoundCloud from '../dist/mjs/index.js';
import { print } from './output.js';

const scfetch = new SoundCloud();

scfetch.getMixedSelections().then((selections) => {
  print(selections);
});
