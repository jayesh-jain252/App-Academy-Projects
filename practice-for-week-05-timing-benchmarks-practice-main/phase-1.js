// Adds up positive integers from 1-n
function addNums(n) {
  // Fill this in
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}

// Adds up values of addNums(1) through addNums(n)
function addManyNums(n) {
  // Fill this in
  let manysum = 0;
  for (let i = 1; i <= n; i++) {
    manysum += addNums(i);
  }
  return manysum;
}

module.exports = [addNums, addManyNums];
