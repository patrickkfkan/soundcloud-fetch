import SoundCloud from '../dist/mjs/index.js';
import { print } from './utils/output.mjs';

const scfetch = new SoundCloud();

scfetch.getLikesByUser(9723380, { type: 'track'}).then((tracks) => {
  console.log('--- Liked tracks ---');
  print(tracks);
});

scfetch.getLikesByUser(9723380, { type: 'playlistAndAlbum'}).then((playlistsAndAlbums) => {
  console.log('--- Liked playlists / albums ---');
  print(playlistsAndAlbums);
});
