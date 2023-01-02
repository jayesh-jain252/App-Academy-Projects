function selectionSort(arr) {
  // Copy the original array
  let copy = arr.slice(0);
  // Create an array to store the sorted values
  let sorted = [];
  // While the array is not empty...
  while (copy.length > 0) {
    // Do not move this console.log
    console.log(sorted.join(","));
    let min = copy[0];
    // Find the index of the minimum value in the unsorted half

    for (let i = 0; i < copy.length; i++) {
      if (copy[i] < min) {
        min = copy[i];
      }
    }

    // Save and remove the value at the min index
    copy.splice(copy.indexOf(min), 1);
    // Add the min value to the end of the sorted array
    sorted.push(min);
  }
  return sorted;
}

function selectionSortInPlace(arr) {
  // Set a pointer at zero diving the array into sorted and unsorted halves
  let i = 0;
  // Repeat while the unsorted half is not empty:
  while (i < arr.length) {
    // Do not move this console.log
    console.log(arr.join(","));
    let curr = i;
    let min = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }
    if (min !== i) {
      // Save the min value
      while (min > curr) {
        let temp = arr[min - 1];
        arr[min - 1] = arr[min];
        arr[min] = temp;
        min--;
      }
    }
    // Shift every unsorted value to the left of the min value to the right by 1

    // Put the min value at the divider

    // Increment the divider and repeat
    i++;
  }
  return arr;
}

module.exports = [selectionSort, selectionSortInPlace];

let arr = [2, 4, 6, 8, 1, 3, 5, 7, 9];
console.log(selectionSortInPlace(arr));
