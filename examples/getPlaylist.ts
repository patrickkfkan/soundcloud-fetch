import SoundCloud from '../dist/mjs/index.js';
import { print } from './utils/output.js';

const scfetch = new SoundCloud();

scfetch.getPlaylistOrAlbum(1585151710).then(async (playlist) => {
  if (playlist) {
    print(playlist);
    const tracks = await playlist.getTracks();
    console.log('--- TRACKS ---');
    print(tracks);
  }
});
