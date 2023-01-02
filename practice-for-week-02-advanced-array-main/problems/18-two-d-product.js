/*

Write a function `twoDimensionalProduct(array)` that takes in a 2D array of
numbers as an argument. The function should return the total product of all
numbers multiplied together.

Solve this using Array's `forEach()`, `map()`, `filter()` **OR** `reduce()`
methods.

Examples:


let arr1 = [
  [6, 4],
  [5],
  [3, 1]
];
console.log(twoDimensionalProduct(arr1)); // 360

let arr2 = [
  [11, 4],
  [2]
];
console.log(twoDimensionalProduct(arr2)); // 88

*/

let twoDimensionalProduct = function (arr) {
  // Your code here
  // let product = 1;
  // for (let i = 0; i < arr.length; i++) {
  //   let subArr = arr[i];
  //   for (let j = 0; j < subArr.length; j++) {
  //     product *= arr[i][j];
  //   }
  // }
  let product = [];
  for (let i = 0; i < arr.length; i++) {
    product.push(
      arr[i].reduce((acc, num) => {
        return acc * num;
      }, 1)
    );
  }
  return product.reduce((acc, num) => {
    return acc * num;
  }, 1);

  // return product;
};

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
  module.exports = twoDimensionalProduct;
} catch (e) {
  module.exports = null;
}
