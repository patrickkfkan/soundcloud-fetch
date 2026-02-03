import SoundCloud from '../dist/mjs/index.js';
import { print } from './utils/output.mjs';

const scfetch = new SoundCloud();

scfetch.getUser(9723380).then((user) => {
  if (user) {
    print(user);
  }
});
