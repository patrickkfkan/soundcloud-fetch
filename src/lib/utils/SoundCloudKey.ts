import fetch from 'node-fetch';
import { MOBILE_URL, WEB_URL } from './Constants.js';

export async function getSoundCloudClientId() {
  try {
    return await getClientIdWeb();
  }
  catch (error) {
    return getClientIdMobile();
  }
}

// Adapted from:
// https://github.com/Tenpi/soundcloud.ts/blob/3cd9b864412e485aa7a8c3885d0695cc10f3485e/API.ts#L89
async function getClientIdWeb() {
  const response = await (await fetch(WEB_URL)).text();
  const urls = response.match(
    /(?!<script.*?src=")https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*\.js)(?=.*?>)/g
  );
  if (!urls || urls.length === 0) throw new Error('Could not find script URLs');
  for (const url of urls) {
    const script = await (await fetch(url)).text();
    const clientId = script.match(/[{,]client_id:"(\w+)"/)?.[1];
    if (typeof clientId === 'string') return clientId;
  }
  throw new Error('Could not find client ID in script URLs');
}

// Adapted from:
// https://github.com/Tenpi/soundcloud.ts/blob/3cd9b864412e485aa7a8c3885d0695cc10f3485e/API.ts#L105
async function getClientIdMobile() {
  const response = await (await fetch(MOBILE_URL, {
    headers: {
      'User-Agent':
              'Mozilla/5.0 (iPhone; CPU iPhone OS 16_5_1 like Mac OS X) ' +
              'AppleWebKit/605.1.15 (KHTML, like Gecko) CriOS/99.0.4844.47 Mobile/15E148 Safari/604.1'
    }
  })).text();
  const clientId = response.match(/"clientId":"(\w+?)"/)?.[1];
  if (typeof clientId === 'string') return clientId;
  throw new Error('Could not find client ID');
}
