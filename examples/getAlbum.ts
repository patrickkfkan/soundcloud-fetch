import SoundCloud from '../dist/mjs/index.js';
import { print } from './output.js';

const scfetch = new SoundCloud();

scfetch.getAlbum(1602102004).then(async (album) => {
  if (album) {
    print(album.toPlainObject());

    const tracks = await album.getTracks();
    console.log('--- TRACKS ---');
    tracks?.forEach((track) => print(track.toPlainObject()));
  }
});
