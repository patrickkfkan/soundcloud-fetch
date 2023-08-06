import SoundCloud from '../dist/mjs/index.js';
import { print } from './output.js';

const scfetch = new SoundCloud();

scfetch.getPlaylist(1585151710).then(async (playlist) => {
  if (playlist) {
    print(playlist.toPlainObject());

    const tracks = await playlist.getTracks();
    console.log('--- TRACKS ---');
    tracks.forEach((track) => print(track.toPlainObject()));
  }
});
