import SoundCloud from '../dist/mjs/index.js';
import { print } from './utils/output.js';

const scfetch = new SoundCloud();

scfetch.getPlaylistsByUser(1179174835).then((playlists) => {
  print(playlists);
});
