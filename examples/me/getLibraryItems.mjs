import SoundCloud from '../../dist/mjs/index.js';
import accessToken from './accessToken.mjs';
import { print } from '../utils/output.mjs';

/**
 * Before running this example, provide your access token in ./accessToken.mjs
 */

const scfetch = new SoundCloud({
  accessToken
});

scfetch.me.getLibraryItems().then((items) => {
  print(items);
})
  .catch((error) => {
    console.log('Caught error: ', error.message);
  });
