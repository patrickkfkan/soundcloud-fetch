import SoundCloud from '../dist/mjs/index.js';
import { print } from './utils/output.js';

const scfetch = new SoundCloud();

scfetch.getFollowing(168756099).then((following) => {
  print(following);
});
