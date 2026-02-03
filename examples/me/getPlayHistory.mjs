import SoundCloud from '../../dist/mjs/index.js';
import accessToken from './accessToken.mjs';
import { print } from '../utils/output.mjs';

/**
 * Before running this example, provide your access token in ./accessToken.mjs
 */

const scfetch = new SoundCloud({
  accessToken
});

scfetch.me.getPlayHistory({type: 'track'}).then((tracks) => {
  console.log('===== Recently played tracks =====');
  print(tracks);
})
  .catch((error) => {
    console.log('Caught error: ', error);
  });

scfetch.me.getPlayHistory({type: 'set'}).then((sets) => {
  console.log('===== Recently played sets =====');
  print(sets);
})
  .catch((error) => {
    console.log('Caught error: ', error);
  });
