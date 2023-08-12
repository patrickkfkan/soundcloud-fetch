import SoundCloud from '../dist/mjs/index.js';
import { print } from './utils/output.js';

const scfetch = new SoundCloud();

scfetch.getTopFeaturedTracks({ limit: 10, offset: 5 }).then((tracks) => {
  print(tracks);
});
