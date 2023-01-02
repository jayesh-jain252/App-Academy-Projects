function bubbleSort(arr) {
  debugger;
  // Iterate through the array
  let isSwapped = false;
  for (let i = 0; i < arr.length; i++) {
    let j = 0;
    isSwapped = false;
    for (j; j < arr.length - i - 1; j++) {
      // If the current value is greater than its neighbor to the right
      if (arr[j] > arr[j + 1]) {
        // Swap those values
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        isSwapped = true;
        // Do not move this console.log
        console.log(arr.join(","));
      }
    }
    if (!isSwapped) {
      break;
    }
  }
  // If you get to the end of the array and no swaps have occurred, return
  return arr;
  // Otherwise, repeat from the beginning
}

module.exports = bubbleSort;

arr = [2, 4, 6, 8, 1, 3, 5, 7, 9];
console.log(bubbleSort(arr));
