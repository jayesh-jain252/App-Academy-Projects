function reverseString(string) {
  // Your code here
  if (typeof string !== "string") {
    throw new Error();
  }

  if (string.length === 0) {
    return string;
  }
  return reverseString(string.slice(1)) + string[0];
}

module.exports = { reverseString };
