import util from 'util';

export function print(value) {
  console.log(util.inspect(value, {
    depth: 5
  }));
}
