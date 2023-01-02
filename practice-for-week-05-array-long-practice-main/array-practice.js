const findMinimum = (arr) => {
  // Your code here
  let min = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  return min;
};

const runningSum = (arr) => {
  // Your code here
  let sum = 0;
  let running = [];
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    running.push(sum);
  }
  return running;
};

const evenNumOfChars = (arr) => {
  // Your code here
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    let el = arr[i];
    if (el.length % 2 === 0) {
      count++;
    }
  }
  return count;
};

const smallerThanCurr = (arr) => {
  // Your code here
  let ans = [];
  for (let i = 0; i < arr.length; i++) {
    let el = arr[i];
    count = 0;
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] < el) {
        count++;
      }
    }
    ans.push(count);
  }
  return ans;
};

const twoSum = (arr, target) => {
  // Your code here
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] === target - arr[i]) {
        return true;
      }
    }
  }
  return false;
};

const secondLargest = (arr) => {
  // Your code here
  arr.sort((a, b) => a - b);
  return arr[arr.length - 2];
};

const shuffle = (arr) => {
  // Your code here
  let arrCopy = [].concat(arr);
  let newArray = arrCopy.sort(function () {
    return Math.random() - 0.5;
  });

  return newArray;
};

module.exports = [
  findMinimum,
  runningSum,
  evenNumOfChars,
  smallerThanCurr,
  twoSum,
  secondLargest,
  shuffle,
];
