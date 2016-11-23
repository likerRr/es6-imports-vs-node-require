module.exports = {
  a: 0,
  inc() {++module.exports.a}
};

// let a = 0;
// let inc = () => ++a;
//
// module.exports = {a, inc};
