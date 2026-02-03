import SoundCloud from '../../dist/mjs/index.js';
import { print } from '../utils/output.mjs';

const scfetch = new SoundCloud();

scfetch.me.getLikes({ type: 'track'}).then((tracks) => {
  console.log('--- Liked tracks ---');
  print(tracks);
});

scfetch.me.getLikes({ type: 'playlistAndAlbum'}).then((playlistsAndAlbums) => {
  console.log('--- Liked playlists / albums ---');
  print(playlistsAndAlbums);
});
