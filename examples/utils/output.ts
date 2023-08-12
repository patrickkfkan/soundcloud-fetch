import util from 'util';

export function print(value: object) {
  console.log(util.inspect(value, {
    depth: 5
  }));
}
