const [addNums, addManyNums] = require("./phase-1");

function addNums10Timing(increment) {
  // Copy your `addNums10` code here
  // Then, add timing code
  let initial = increment;
  let addNumArray = [];
  for (let i = 1; i <= 10; i++) {
    console.time("addNums");
    startTime = Date.now();
    addNumArray.push(addNums(initial));
    endTime = Date.now();
    console.timeEnd("addNums");
    console.log(`${endTime - startTime}`);
    initial += increment;
  }
  return addNumArray;
  // Your code here
}

function addManyNums10Timing(increment) {
  // Copy your `addManyNums10` code here
  // Then, add timing code
  let initial = increment;
  let addNumArray = [];
  for (let i = 1; i <= 10; i++) {
    console.time("addManyNums");
    startTime = Date.now();
    addNumArray.push(addManyNums(initial));
    endTime = Date.now();
    console.timeEnd("addManyNums");
    console.log(`${endTime - startTime}`);
    initial += increment;
  }
  return addNumArray;
  // Your code here
}

n = 1000000;
console.log(`addNums(${n}): `);
addNums10Timing(1000000);

console.log("\n***********\n");

n = 1000;
console.log(`addManyNums(${n}): `);
addManyNums10Timing(5000);
