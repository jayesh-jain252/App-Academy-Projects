function oddIndices(arr) {
  // Return an array containing all the odd indices in the array
  // Your code here
  let ans = [];
  for (let i = 1; i < arr.length; i += 2) {
    ans.push(arr[i]);
  }
  return ans;
}

function oddReverse(arr) {
  // Return an array containing all the odd indices starting from the end
  // Your code here
  let ans = [];
  for (let i = arr.length - 1; i > 0; i--) {
    if (i % 2 === 1) {
      ans.push(arr[i]);
    }
  }
  return ans;
}

function secondPower(arr) {
  // Return an array containing all indices that are powers of 2
  // Your code here
  let ans = [];
  for (let i = 1; i < arr.length; i++) {
    if (Math.log2(i) % 1 === 0) {
      ans.push(arr[i]);
    }
  }
  return ans;
}

function nthPower(arr, n) {
  // Return an array containing all indices that are powers of n
  // Your code here
  function isPower_of_n(num, power) {
    if (num <= 0) return false;
    if (num % power == 0) return isPower_of_n(num / power, power);
    if (num == 1) return true;
    return false;
  }

  let ans = [];
  if (arr.length === 0) {
    return [];
  }

  for (let i = 0; i < arr.length; i++) {
    if (isPower_of_n(i, n)) {
      ans.push(arr[i]);
    }
  }
  return ans;
}
console.log(Math.log(10) / Math.log(2));
function firstHalf(arr) {
  // Return an array containing the first half of an array
  // Include middle index on odd length arr
  // Your code here
  if (arr.length % 2 === 0) {
    return arr.slice(0, arr.length / 2);
  } else {
    return arr.slice(0, Math.round(arr.length / 2));
  }
}

function secondHalf(arr) {
  // Return an array containing the second half of an array
  // Exclude middle index on odd length arr
  // Your code here
  if (arr.length % 2 === 0) {
    return arr.slice(arr.length / 2, arr.length);
  } else {
    return arr.slice(Math.round(arr.length / 2), arr.length);
  }
}

module.exports = {
  oddIndices,
  oddReverse,
  secondPower,
  nthPower,
  firstHalf,
  secondHalf,
};
