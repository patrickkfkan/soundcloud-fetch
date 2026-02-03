import SoundCloud from '../dist/mjs/index.js';
import { print } from './utils/output.mjs';

const scfetch = new SoundCloud();

scfetch.getPlaylistOrAlbum(1602102004).then(async (album) => {
  if (album) {
    print(album);
    const tracks = await album.getTracks();
    console.log('--- TRACKS ---');
    print(tracks);
  }
});
