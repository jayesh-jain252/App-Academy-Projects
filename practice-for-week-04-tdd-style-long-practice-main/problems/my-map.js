function myMap(inputArray, callback) {
  // Your code here
  let modifiedArr = [];

  for (let i = 0; i < inputArray.length; i++) {
    let el = inputArray[i];
    let modifiedEl = callback(el, i, inputArray);
    modifiedArr.push(modifiedEl);
  }
  return modifiedArr;
}

module.exports = myMap;
