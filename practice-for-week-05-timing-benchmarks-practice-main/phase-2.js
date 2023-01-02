const [addNums, addManyNums] = require("./phase-1");

// Runs `addNums` in 10 increasing increments
function addNums10(increment) {
  // Fill this in
  let initial = increment;
  let addNumArray = [];
  for (let i = 1; i <= 10; i++) {
    addNumArray.push(addNums(initial));
    initial += increment;
  }
  return addNumArray;
}

// Runs `addManyNums` in 10 increasing increments
function addManyNums10(increment) {
  // Fill this in
  let initial = increment;
  let addNumArray = [];
  for (let i = 1; i <= 10; i++) {
    addNumArray.push(addManyNums(initial));
    initial += increment;
  }
  return addNumArray;
}

increment = 10;
console.log(addNums10(increment));

module.exports = [addNums10, addManyNums10];
