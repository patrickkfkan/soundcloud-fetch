import SoundCloud from '../dist/mjs/index.js';
import { print } from './utils/output.js';

const scfetch = new SoundCloud();

scfetch.getAlbumsByUser(9723380).then((albums) => {
  print(albums);
});
