function linearSearch(arr, target) {
  // Can you solve this in one line?
  return arr.indexOf(target);
}

function binarySearch(arr, target) {
  // Set integers pointing to the high and low range of possible indices
  let start = 0;
  let end = arr.length - 1;
  // While high and low indices do not overlap...
  while (start <= end) {
    // Find the midpoint between high and low indices
    mid = Math.floor((end + start) / 2);

    // Compare the target value to the midpoint value

    // If the target equals the midpoint...
    // Return the midpoint index
    if (arr[mid] === target) {
      return mid;
    }
    // If the target is higher than the midpoint...
    // Move the low pointer to midpoint + 1
    if (arr[mid] < target) {
      start = mid + 1;
    }
    // If the target is less than the midpoint...
    // Move the high pointer to midpoint - 1
    if (arr[mid] > target) {
      end = mid - 1;
    }
  }
  // Return -1 if the loop exits with overlapping pointers
  return -1;
}

module.exports = [linearSearch, binarySearch];
