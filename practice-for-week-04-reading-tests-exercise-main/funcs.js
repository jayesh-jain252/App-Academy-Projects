function isFive(num) {
  return num === 5;
}

let isOdd = (num) => {
  if (typeof num !== "number") {
    throw new Error();
  }
  if (num % 2 === 0) {
    return false;
  }
  return true;
};

let myRange = (min, max, step) => {
  if (step === undefined) {
    let range = [];
    for (let i = min; i <= max; i++) {
      range.push(i);
    }
    return range;
  } else {
    let range = [];
    for (let i = min; i <= max; i += step) {
      range.push(i);
    }
    return range;
  }
};

module.exports = {
  isFive,
  isOdd,
  myRange,
};
