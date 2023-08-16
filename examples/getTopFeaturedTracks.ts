import SoundCloud from '../dist/mjs/index.js';
import { print } from './utils/output.js';

const scfetch = new SoundCloud();

scfetch.getTopFeaturedTracks({ limit: 10 }).then((tracks) => {
  print(tracks);
});
