import SoundCloud from '../dist/mjs/index.js';
import { print } from './output.js';

const scfetch = new SoundCloud();

scfetch.getTrack(9723380).then(async (track) => {
  if (track) {
    print(track.toPlainObject());

    const url = await scfetch.getStreamingUrl(track.mediaInfo.transcodings[0].url);
    console.log(`Streaming URL: ${url}`);
  }
});
