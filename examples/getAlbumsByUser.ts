import SoundCloud from '../dist/mjs/index.js';
import { print } from './output.js';

const scfetch = new SoundCloud();

scfetch.getAlbumsByUser(9723380).then((album) => {
  print(album.toPlainObject());
});
