// let aModule = require('./a');
//
// module.exports = function doMess() {
//   console.log('Module B');
//   console.log(aModule.a);
//   aModule.inc();
//   console.log(aModule.a);
//   // aModule.a++; // is not allowed in es6, but allowed in node
//   console.log('--------');
// };

let {a, inc} = require('./a');

module.exports = function doMess() {
  console.log('Module B');
  console.log(a);
  inc();
  console.log(a);
  // a++; // is not allowed in es6, but allowed in node
  console.log('--------');
};