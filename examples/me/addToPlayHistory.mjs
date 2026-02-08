import SoundCloud from '../../dist/mjs/index.js';
import cookie from './cookie.mjs';

/**
 * Before running this example, place your cookie in ./cookie.mjs
 */

const scfetch = new SoundCloud({
  cookie
});

const albumId = 1228734346;

async function start() {
  const album = await scfetch.getPlaylistOrAlbum(albumId);
  const tracks = await album?.getTracks();
  const track = tracks?.[0];
  if (album && track) {
    return scfetch.me.addToPlayHistory(track, album, {
      onSendPlayTrackEventError: (err) => {
        console.error('Error sending play track event: ', err);
        console.info('Going to proceed anyway - this will only add the album to history!');
        
        // Return false if you don't want to proceed. This is the default behavior 
        // if you don't provide a callback.
        return true;
      }
    });
  }
  throw Error('Target not found');
}

start().then((res) => {
  console.log(res);
})
  .catch((error) => {
    console.log('Caught error: ', error.message);
  });
