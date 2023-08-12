import SoundCloud from '../dist/mjs/index.js';
import { print } from './output.js';

const scfetch = new SoundCloud();

const albumId = 1602102004;
const playlistId = 1585151710;

async function test(id: number) {
  scfetch.getPlaylistOrAlbum(id).then(async (result) => {
    if (result) {
      print(result);
      const tracks = await result.getTracks();
      console.log('--- TRACKS ---');
      tracks?.forEach((track) => print(track));
      console.log('--------------');
    }
  });

}

test(albumId);
test(playlistId);
