// 1.
function sum(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
}
try {
  let res = sum(null);
  console.log(res);
} catch (e) {
  if (e instanceof TypeError) {
    console.error(`Wrong Type: ${e.message}`);
  }
}

// 2.
// tests

// Your code here
let sayName = (str) => {
  try {
    if (typeof str !== "string") {
      throw new TypeError("Invalid name! Must be a string!");
    }
    console.log(str);
  } catch (e) {
    console.log(e.name + ": " + e.message);
  }
};
sayName("Alex");
sayName(1);
// 3.
function greet(greeting) {
  try {
    if (!greeting) {
      throw new Error("There was no greeting given.");
    }

    console.log(greeting);
  } catch (e) {
    console.log("Hello World");
  }
}

greet();
