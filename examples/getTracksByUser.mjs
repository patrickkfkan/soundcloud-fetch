import SoundCloud from '../dist/mjs/index.js';
import { print } from './utils/output.mjs';

const scfetch = new SoundCloud();

scfetch.getTracksByUser(9723380).then((tracks) => {
  print(tracks);
});
