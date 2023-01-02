// Your code here
const chai = require("chai");
const { expect } = require("chai");
const spies = require("chai-spies");
chai.use(spies);

const myMap = require("../problems/my-map");

describe("myMap(arr,callback)", () => {
  let modifiedArr;
  let arr;
  let callback;

  beforeEach(() => {
    arr = [1, 2, 3];
    callback = (el) => el * 2;
  });

  it("should apply callback to each element of array and return new array", () => {
    modifiedArr = myMap(arr, callback);
    expect(modifiedArr).deep.to.equal([2, 4, 6]);
    expect(arr).to.eql([1, 2, 3]);
  });

  it("should not call the built-in Array#map", function () {
    const mapSpy = chai.spy.on(Array.prototype, "map");
    myMap(arr, callback);
    expect(mapSpy).to.have.not.been.called();
  });

  it("should call callback for every element", () => {
    const cbSpy = chai.spy(callback);
    myMap(arr, cbSpy);
    expect(cbSpy).to.have.been.called(arr.length);
  });
});
