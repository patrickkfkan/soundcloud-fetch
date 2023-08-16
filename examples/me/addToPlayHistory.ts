import SoundCloud from '../../dist/mjs/index.js';
import accessToken from './accessToken.js';

/**
 * Before running this example, provide your access token in ./accessToken.ts
 */

const scfetch = new SoundCloud({
  accessToken
});

const albumId = 1228734346;

async function start() {
  const album = await scfetch.getPlaylistOrAlbum(albumId);
  const tracks = await album?.getTracks();
  const track = tracks?.[0];
  if (album && track) {
    return scfetch.me.addToPlayHistory(track, album);
  }
  throw Error('Target not found');
}

start().then((res) => {
  console.log(res);
})
  .catch((error) => {
    console.log('Caught error: ', error.message);
  });
