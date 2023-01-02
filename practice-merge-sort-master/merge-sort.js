// Merge Sort out-of-place
// Do not modify the original array
function mergeSort(arr) {
  // Check if the input is length 1 or less
  // If so, it's already sorted: return
  if (arr.length <= 1) {
    return arr;
  }
  // Divide the array in half
  // Recursively sort the left half
  let mid = Math.floor(arr.length / 2);
  // Recursively sort the right half
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));
  // Merge the halves together and return
  return merge(left, right);
}

// Takes in two sorted arrays and returns them merged into one
function merge(arrA, arrB) {
  // Create an empty return array
  let merged = [];
  // Point to the first value of each array
  let i = 0;
  let j = 0;
  // While there are still values in each array...
  while (i < arrA.length && j < arrB.length) {
    // Compare the first values of each array
    // Add the smaller value to the return array
    if (arrA[i] <= arrB[j]) {
      merged.push(arrA[i]);
      i++;
    } else if (arrA[i] > arrB[j]) {
      merged.push(arrB[j]);
      j++;
    }
    // Move the pointer to the next value in that array
  }
  while (i < arrA.length) {
    merged.push(arrA[i]);
    i++;
  }
  while (j < arrB.length) {
    merged.push(arrB[j]);
    j++;
  }
  // Return the return array
  return merged;
}

module.exports = [merge, mergeSort];
