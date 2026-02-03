import SoundCloud from '../dist/mjs/index.js';
import { print } from './utils/output.mjs';

const scfetch = new SoundCloud();

scfetch.getTrack(9723380).then(async (track) => {
  if (track) {
    print(track);
    if (track?.mediaInfo?.transcodings?.[0]?.url) {
      const url = await scfetch.getStreamingUrl(track.mediaInfo.transcodings[0].url);
      console.log('--------------');
      console.log(`Streaming URL: ${url}`);
    }
  }
});
