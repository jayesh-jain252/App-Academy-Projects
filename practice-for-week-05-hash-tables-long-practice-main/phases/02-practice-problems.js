function anagrams(str1, str2) {
  // Your code here
  let str1obj = {};
  for (let i = 0; i < str1.length; i++) {
    if (str1obj[str1[i]] === undefined) {
      str1obj[str1[i]] = 0;
    }
    str1obj[str1[i]] += 1;
  }

  let str2obj = {};
  for (let i = 0; i < str2.length; i++) {
    if (str2obj[str2[i]] === undefined) {
      str2obj[str2[i]] = 0;
    }
    str2obj[str2[i]] += 1;
  }

  for (var key of Object.keys(str2obj)) {
    if (str1obj[key] === undefined || str1obj[key] !== str2obj[key]) {
      return false;
    }
  }
  return true;
}

function commonElements(arr1, arr2) {
  // Your code here
  const setA = new Set(arr1);
  const setB = new Set(arr2);

  let intersectionResult = [];

  for (let i of setB) {
    if (setA.has(i)) {
      intersectionResult.push(i);
    }
  }

  return intersectionResult;
}

function duplicate(arr) {
  // Your code here
  let arrObj = {};
  for (let i = 0; i < arr.length; i++) {
    if (arrObj[arr[i]] === undefined) {
      arrObj[arr[i]] = 0;
    }
    arrObj[arr[i]] += 1;
  }

  for (var key of Object.keys(arrObj)) {
    if (arrObj[key] === 2) {
      return Number(key);
    }
  }
}

function twoSum(nums, target) {
  // Your code here
  debugger;
  const hashtable = {};
  for (let i = 0; i < nums.length; i++) {
    hashtable[nums[i]] = i;
  }
  for (let j = 0; j < nums.length; j++) {
    let complement = target - nums[j];

    if (hashtable.hasOwnProperty(complement) && hashtable[complement] !== j) {
      return true;
    }
  }
  return false;
}

function wordPattern(pattern, strings) {
  // Your code here
  let patternObj = {};
  for (let i = 0; i < pattern.length; i++) {
    if (patternObj[pattern[i]] === undefined) {
      patternObj[pattern[i]] = i;
    }
  }

  let stringObj = {};
  for (let i = 0; i < strings.length; i++) {
    if (stringObj[strings[i]] === undefined) {
      stringObj[strings[i]] = i;
    }
  }

  for (let i = 0; i < strings.length; i++) {
    if (stringObj[strings[i]] !== patternObj[pattern[i]]) {
      return false;
    }
  }
  return true;
}

module.exports = [anagrams, commonElements, duplicate, twoSum, wordPattern];

console.log(wordPattern("ABBA", ["dog", "cat", "cat", "dog"]));
console.log(wordPattern("ABBA", ["dog", "dog", "dog", "dog"]));
