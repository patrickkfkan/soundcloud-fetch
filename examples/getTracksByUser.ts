import SoundCloud from '../dist/mjs/index.js';
import { print } from './output.js';

const scfetch = new SoundCloud();

scfetch.getTracksByUser(9723380).then((tracks) => {
  print(tracks.toPlainObject());
});
