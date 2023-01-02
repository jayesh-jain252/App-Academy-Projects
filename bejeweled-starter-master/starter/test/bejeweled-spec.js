const { expect } = require("chai");

const Bejeweled = require("../class/bejeweled.js");

describe("Bejeweled", function () {
  // Add tests for setting up a basic board
  beforeEach(() => {
    bejeweled = new Bejeweled();
  });

  describe("Bejeweled constructor function", function () {
    it('should have a "playerTurn" property', function () {
      expect(bejeweled).to.have.property("playerTurn");
    });
    it('should have a "grid" property', function () {
      expect(bejeweled).to.have.property("grid");
    });
    it('should have a "cursor" property', function () {
      expect(bejeweled).to.have.property("cursor");
    });
  });
  // Add tests for a valid swap that matches 3

  // Add tests for swaps that set up combos

  // Add tests to check if there are no possible valid moves
});
