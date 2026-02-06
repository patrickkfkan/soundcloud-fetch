import SoundCloud from '../dist/mjs/index.js';
import { print } from './utils/output.mjs';

const scfetch = new SoundCloud();

void (async() => {
  const track = await scfetch.getTrack(1807959264);
  if (track) {
    print(track);
    console.log('\nStreaming data:\n');
    if (track?.mediaInfo?.transcodings) {
      for (const transcoding of track.mediaInfo.transcodings) {
        if (!transcoding.url || transcoding.preset.startsWith('abr_sq')) {
          // Transcoding URL for abr (adaptive bitrate) stream always returns 404
          continue;
        }
        const f = `${transcoding.preset} ${transcoding.protocol}`;
        try {
          const {url, licenseAuthToken } = await scfetch.getStreamingData(
            {
              transcodingUrl: transcoding.url,
              trackAuthorization: track.mediaInfo.trackAuthorization || undefined
            }
          );
          console.log(`${f}: ${url}`);
          if (licenseAuthToken) {
            console.log('------');
            console.log('licenseAuthToken:', licenseAuthToken);
          }
          console.log('\n');
        }
        catch (error) {
          console.error(`Could not get streaming data for ${f}:`, error, '\n');
        }
      }
    }
  }
})();