import SoundCloud from '../dist/mjs/index.js';
import { print } from './utils/output.mjs';

const scfetch = new SoundCloud();

scfetch.getTopFeaturedTracks({ limit: 20 }).then((tracks) => {
  print(tracks);

  if (tracks.continuation) {
    scfetch.getContinuation(tracks.continuation).then((continuation) => {
      console.log('--- CONTINUATION ---');
      print(continuation);
    });
  }
});
