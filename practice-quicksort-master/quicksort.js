function quicksort(arr) {
  // Check if the input is length 1 or less
  // If so, it's already sorted: return
  debugger;
  if (arr.length <= 1) {
    return arr;
  }
  // Pick the first value as the pivot
  let pivot = arr[0];
  // Orient the pivot so that...
  // every number smaller than the pivot is to the left
  // every number larger (or equal) than the pivot is to the right
  let left = arr.filter((num) => num < pivot);
  let right = arr.filter((num) => num > pivot);
  // Recursively sort the left
  let leftSorted = quicksort(left);
  let rightSorted = quicksort(right);
  // Recursively sort the right

  // Return the left, pivot and right in sorted order
  return leftSorted.concat([pivot], rightSorted);
}

module.exports = [quicksort];

let arr = [2, 4, 6, 8, 1, 3, 5, 7, 9];

console.log(quicksort(arr));
