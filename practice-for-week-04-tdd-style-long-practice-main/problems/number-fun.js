function returnsThree() {
  // Your code here
  return 3;
}

function reciprocal(n) {
  // Your code here
  if (n < 1 || n > 1000000) {
    throw new TypeError("n should be in the range of 1 to 1000000");
  }
  return 1 / n;
}

module.exports = {
  returnsThree,
  reciprocal,
};
