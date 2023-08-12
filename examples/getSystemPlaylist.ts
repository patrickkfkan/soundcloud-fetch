import SoundCloud from '../dist/mjs/index.js';
import { print } from './output.js';

const scfetch = new SoundCloud();

scfetch.getSystemPlaylist('soundcloud:system-playlists:charts-top:all-music').then(async (playlist) => {
  if (playlist) {
    print(playlist);

    const tracks = await playlist.getTracks();
    console.log('--- TRACKS ---');
    tracks?.forEach((track) => print(track));
  }
});
