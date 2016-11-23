import {a, inc} from './a';

export function doMess() {
  console.log('Module B');
  console.log(a);
  inc();
  console.log(a);
  console.log('--------');
}