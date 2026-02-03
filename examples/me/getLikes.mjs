import SoundCloud from '../../dist/mjs/index.js';
import accessToken from './accessToken.mjs';
import { print } from '../utils/output.mjs';

/**
 * Before running this example, provide your access token in ./accessToken.mjs
 */

const scfetch = new SoundCloud({
  accessToken
});

scfetch.me.getLikes({ type: 'track'}).then((tracks) => {
  console.log('--- Liked tracks ---');
  print(tracks);
})
  .catch((error) => {
    console.log('Caught error: ', error.message);
  });

scfetch.me.getLikes({ type: 'playlistAndAlbum'}).then((playlistsAndAlbums) => {
  console.log('--- Liked playlists / albums ---');
  print(playlistsAndAlbums);
})
  .catch((error) => {
    console.log('Caught error: ', error.message);
  });
