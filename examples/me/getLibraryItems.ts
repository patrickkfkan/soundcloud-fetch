import SoundCloud from '../../dist/mjs/index.js';
import accessToken from './accessToken.js';
import { print } from '../utils/output.js';

/**
 * Before running this example, provide your access token in ./accessToken.ts
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
