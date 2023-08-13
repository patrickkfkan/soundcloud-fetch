import SoundCloud from '../../dist/mjs/index.js';
import accessToken from './accessToken.js';
import { print } from '../utils/output.js';

/**
 * Before running this example, provide your access token in ./accessToken.ts
 */

const scfetch = new SoundCloud({
  accessToken
});

scfetch.me.getPlayHistory('track').then((tracks) => {
  console.log('===== Recently played tracks =====');
  print(tracks);
})
  .catch((error) => {
    console.log('Caught error: ', error);
  });

scfetch.me.getPlayHistory('set').then((sets) => {
  console.log('===== Recently played sets =====');
  print(sets);
})
  .catch((error) => {
    console.log('Caught error: ', error);
  });
