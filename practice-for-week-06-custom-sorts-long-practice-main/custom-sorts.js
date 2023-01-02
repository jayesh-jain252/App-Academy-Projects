function ageSort(users) {
  // Your code here
  users.sort((a, b) => a.age - b.age);
  return users;
}

function oddEvenSort(arr) {
  debugger;
  // Your code here
  function oddEvenCompare(a, b) {
    if (a % 2 === 1 && b % 2 === 0) return -1;
    if (a % 2 === 0 && b % 2 === 1) return 1;
    return a - b;
  }

  arr.sort(oddEvenCompare);
  return arr;
}

function validAnagrams(s, t) {
  // Your code here
  let sorted_s = s.split("").sort().join("");
  let sorted_t = t.split("").sort().join("");

  if (sorted_s === sorted_t) {
    return true;
  }

  return false;
}

function reverseBaseSort(arr) {
  // Your code here
  function Compare(a, b) {
    if (Math.floor(Math.log10(a)) + 1 > Math.floor(Math.log10(b)) + 1) {
      return -1;
    }
    if (Math.floor(Math.log10(a)) + 1 < Math.floor(Math.log10(b)) + 1) {
      return 1;
    }
    return a - b;
  }

  arr.sort(Compare);
  return arr;
}

function frequencySort(arr) {
  // Your code here
  let arrObj = {};
  for (let i = 0; i < arr.length; i++) {
    if (arrObj[arr[i]] === undefined) {
      arrObj[arr[i]] = 0;
    }
    arrObj[arr[i]] += 1;
  }
  function Compare(a, b) {
    if (arrObj[a] - arrObj[b] > 0) {
      return 1;
    }
    if (arrObj[a] - arrObj[b] < 0) {
      return -1;
    }
    return b - a;
  }
  arr.sort(Compare);
  return arr;
}

module.exports = [
  oddEvenSort,
  validAnagrams,
  reverseBaseSort,
  frequencySort,
  ageSort,
];

const arr1 = [1, 1, 2, 2, 2, 3];
const arr2 = [2, 3, 1, 3, 2];
const arr3 = [-1, 1, -6, 4, 5, -6, 1, 4, 1];

console.log(frequencySort(arr2));
