// Your code here
const { expect } = require("chai");

const { reverseString } = require("../problems/reverse-string");

describe("reverseString(str)", function () {
  it("should return reverse string", () => {
    let reverse = reverseString("hello");
    expect(reverse).to.equal("olleh");
  });

  it("should return empty string if str is empty", () => {
    let reverse = reverseString("");
    expect(reverse).to.equal("");
  });

  it("should throw error if passed parameter is not of type string", () => {
    const num = 5;
    const object = { i: "am", an: "object" };
    const array = ["i", "am", "an", "array"];

    expect(() => reverseString(num)).to.throw(Error);
    expect(() => reverseString(object)).to.throw(Error);
    expect(() => reverseString(array)).to.throw(Error);
  });
});
