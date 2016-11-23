let moduleA = require('./a');
let doMess = require('./b');

doMess();
console.log(moduleA.a);
moduleA.inc();
console.log(moduleA.a);


// let a = require('./a').a;
// let inc = require('./a').inc;
// let doMess = require('./b');

// doMess();
// console.log(a);
// inc();
// console.log(a);

console.log('End node');
console.log('--------------');