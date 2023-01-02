const logBetween = (start, finish) => {
  let range = [];
  for (let i = start; i <= finish; i++) {
    range.push(i);
  }
  return range;
};

// console.log(logBetween(-1, 2)); // => [-1, 0, 1, 2]
// console.log(logBetween(14, 6)); // => []
// console.log(logBetween(4, 6)); // => [4, 5, 6]

const logBetweenStepper = (start, finish, step) => {
  let range = [];
  for (let i = start; i <= finish; i += step) {
    range.push(i);
  }
  return range;
};

// console.log(logBetweenStepper(5, 9, 1)); // => [5, 6, 7, 8, 9]
// console.log(logBetweenStepper(-10, 15, 5)); // => [-10, -5, 0, 5, 10, 15]

const printReverse = (end, start) => {
  let reverse = [];
  for (let i = start - 1; i >= end + 1; i--) {
    reverse.push(i);
  }
  return reverse;
};
// console.log(printReverse(13, 18)); // => [17, 16, 15, 14]
// console.log(printReverse(90, 94)); // => [93, 92, 91]

let fizzBuzz = (num) => {
  let fiz = [];
  for (let i = 3; i < num; i++) {
    if ((i % 3 === 0 || i % 5 === 0) && i % 15 !== 0) {
      fiz.push(i);
    }
  }
  return fiz;
};
// console.log(fizzBuzz(20));

let isPrime = (num) => {
  if (num < 2) {
    return false;
  }
  if (num === 2) {
    return true;
  }
  for (let i = 2; i < Math.floor(num / 2); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};
// console.log(isPrime(2)); // => true
// console.log(isPrime(10)); // => false
// console.log(isPrime(11)); // => true
// console.log(isPrime(9)); // => false
// console.log(isPrime(2017)); // => true

let myIndexOf = (arr, target) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }
  return -1;
};
// console.log(myIndexOf([1, 2, 3, 4], 4)); // => 3
// console.log(myIndexOf([5, 6, 7, 8], 2));

let factorArray = (arr, target) => {
  let factarr = [];
  for (let i = 0; i < arr.length; i++) {
    if (target % arr[i] === 0) {
      factarr.push(arr[i]);
    }
  }
  return factarr;
};

// console.log(factorArray([2, 3, 4, 5, 6], 20)); // => [2,4,5]
// console.log(factorArray([2, 3, 4, 5, 6], 35)); // => [5]
// console.log(factorArray([10, 15, 20, 25], 5));

let oddRange = (num) => {
  let oddarr = [];
  for (let i = 1; i <= num; i++) {
    if (i % 2 !== 0) {
      oddarr.push(i);
    }
  }
  return oddarr;
};
// console.log(oddRange(13)); // => [ 1, 3, 5, 7, 9, 11, 13 ]
// console.log(oddRange(6)); // => [ 1, 3, 5 ]

let reverseHyphenString = (string) => {
  let words = string.split("-");

  for (let i = 0; i < words.length / 2; i++) {
    let temp = words[i];
    words[i] = words[words.length - 1 - i];
    words[words.length - 1 - i] = temp;
  }
  return words.join("-");
};

// console.log(reverseHyphenString("Go-to-the-store")); // => "store-the-to-Go"
// console.log(reverseHyphenString("Jump,-jump-for-joy")); // => "joy-for-jump-Jump,"

let intersect = (arr1, arr2) => {
  const setA = new Set(arr1);
  const setB = new Set(arr2);

  let intersectionResult = [];

  for (let i of setB) {
    if (setA.has(i)) {
      intersectionResult.push(i);
    }
  }

  return intersectionResult;
};

// console.log(intersect(["a", "b", "c", "d"], ["b", "d", "e"])); // => [ 'b', 'd' ]
// console.log(intersect(["a", "b", "c"], ["x", "y", "z", "a", "b", "c"])); // => ["a", "b", "c"]

let mirrorArray = (arr) => {
  let reverse = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    reverse.push(arr[i]);
  }

  return arr.concat(reverse);
};

// console.log(mirrorArray([1, 2, 3]));
// // => [ 1, 2, 3, 3, 2, 1 ]
// console.log(mirrorArray(["a", "b", "c", "d"]));
// // => [ 'a', 'b', 'c', 'd', 'd', 'c', 'b', 'a' ]
let countScores = (ppl) => {
  let scoreboard = {};
  for (let i = 0; i < ppl.length; i++) {
    let person = ppl[i];
    if (scoreboard[person.name] === undefined) {
      scoreboard[person.name] = 0;
    }
    scoreboard[person.name] += person.score;
  }
  return scoreboard;
};

// const ppl = [
//   { name: "Anthony", score: 10 },
//   { name: "Fred", score: 10 },
//   { name: "Anthony", score: -8 },
//   { name: "Winnie", score: 12 },
// ];
// console.log(countScores(ppl)); // => { Anthony: 2, Fred: 10, Winnie: 12 }
