const Screen = require("./screen");
const Cursor = require("./cursor");

class Bejeweled {
  constructor() {
    this.playerTurn = "O";

    // Initialize this
    this.grid = Bejeweled.generateGrid();

    this.cursor = new Cursor(8, 8);

    Screen.initialize(8, 8);
    Screen.setGridlines(false);

    this.cursor.setBackgroundColor();
    Screen.render();
  }

  static generateGrid() {
    let arr = [];
    for (let row = 0; row < 8; row++) {
      arr.push(["", "", "", "", "", "", "", ""]);
    }
    return arr;
  }
  static checkForMatches(grid) {
    // Fill this in
  }
}

module.exports = Bejeweled;
