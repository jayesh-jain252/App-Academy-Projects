// Your code here
const { expect } = require("chai");

const { returnsThree, reciprocal } = require("../problems/number-fun");

describe("returnsThree(num)", () => {
  it("should return 3", () => {
    expect(returnsThree()).to.equal(3);
  });
});

describe("reciprocal(num)", () => {
  it("should return reciprocal of a given number if number > 1 and < 1000000", () => {
    let reciprocal_5 = reciprocal(5);
    let reciprocal_999 = reciprocal(999);
    expect(reciprocal_5).to.equal(1 / 5);
    expect(reciprocal_999).to.equal(1 / 999);
  });

  it("should throw error if number < 1 or > 1000000", () => {
    expect(() => reciprocal(0)).to.throw(TypeError);

    expect(() => reciprocal(1000001)).to.throw(TypeError);
  });
});
