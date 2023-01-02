const Screen = require("./screen");
const Cursor = require("./cursor");

class ConnectFour {
  constructor() {
    this.playerTurn = "O";

    this.grid = [
      [" ", " ", " ", " ", " ", " ", " "],
      [" ", " ", " ", " ", " ", " ", " "],
      [" ", " ", " ", " ", " ", " ", " "],
      [" ", " ", " ", " ", " ", " ", " "],
      [" ", " ", " ", " ", " ", " ", " "],
      [" ", " ", " ", " ", " ", " ", " "],
    ];

    this.cursor = new Cursor(6, 7);

    // Initialize a 6x7 connect-four grid
    Screen.initialize(6, 7);
    Screen.setGridlines(true);

    Screen.addCommand("down", "move Down", this.moveDown);
    Screen.addCommand("up", "move Up", this.moveUp);
    Screen.addCommand("left", "move Left", this.moveLeft);
    Screen.addCommand("right", "move Right", this.moveRight);
    Screen.addCommand("o", "Place O at given cursor", this.placeMove);
    Screen.addCommand("x", "Place X at given cursor", this.placeMove);

    this.cursor.setBackgroundColor();
    Screen.render();
  }

  moveDown = () => {
    this.cursor.resetBackgroundColor();
    this.cursor.down();
    this.cursor.setBackgroundColor();

    Screen.render();
  };

  moveUp = () => {
    this.cursor.resetBackgroundColor();
    this.cursor.up();
    this.cursor.setBackgroundColor();

    Screen.render();
  };

  moveRight = () => {
    this.cursor.resetBackgroundColor();
    this.cursor.right();
    this.cursor.setBackgroundColor();

    Screen.render();
  };

  moveLeft = () => {
    this.cursor.resetBackgroundColor();
    this.cursor.left();
    this.cursor.setBackgroundColor();

    Screen.render();
  };

  placeMove = () => {
    if (this.grid[this.cursor.row][this.cursor.col] === " ") {
      this.grid[this.cursor.row][this.cursor.col] = this.playerTurn;
      Screen.setGrid(this.cursor.row, this.cursor.col, this.playerTurn);
      Screen.render();
      if (this.playerTurn === "O") {
        this.playerTurn = "X";
      } else {
        this.playerTurn = "O";
      }
    }

    if (ConnectFour.checkWin(this.grid) !== false) {
      ConnectFour.endGame(ConnectFour.checkWin(this.grid));
    }
  };

  static checkWin(grid) {
    // Return 'X' if player X wins
    // Return 'O' if player O wins
    // Return 'T' if the game is a tie
    // Return false if the game has not ended
    // Check for horizontal Win
    for (let i = 0; i < grid.length; i++) {
      let row = grid[i];
      for (let j = 0; j < row.length - 3; j++) {
        if (
          row[j] !== " " &&
          row[j] === row[j + 1] &&
          row[j + 1] === row[j + 2] &&
          row[j + 2] === row[j + 3]
        ) {
          return row[j];
        }
      }
    }

    // Check for Vertical Win
    for (let i = 0; i < grid.length - 3; i++) {
      let row = grid[i];
      for (let j = 0; j < row.length; j++) {
        if (
          grid[i][j] !== " " &&
          grid[i][j] === grid[i + 1][j] &&
          grid[i + 1][j] === grid[i + 2][j] &&
          grid[i + 2][j] === grid[i + 3][j]
        ) {
          return grid[i][j];
        }
      }
    }

    // Check for diagonal Win down
    for (let i = 0; i < grid.length - 3; i++) {
      let row = grid[i];
      for (let j = 0; j < row.length - 3; j++) {
        if (
          grid[i][j] !== " " &&
          grid[i][j] === grid[i + 1][j + 1] &&
          grid[i + 1][j + 1] === grid[i + 2][j + 2] &&
          grid[i + 2][j + 2] === grid[i + 3][j + 3]
        ) {
          return grid[i][j];
        }
      }
    }

    // Check for diagonal Win up
    for (let i = grid.length - 1; i >= grid.length - 3; i--) {
      let row = grid[i];
      for (let j = 0; j < row.length - 3; j++) {
        if (
          grid[i][j] !== " " &&
          grid[i][j] === grid[i - 1][j + 1] &&
          grid[i - 1][j + 1] === grid[i - 2][j + 2] &&
          grid[i - 2][j + 2] === grid[i - 3][j + 3]
        ) {
          return grid[i][j];
        }
      }
    }

    // Check for Empty Spaces
    for (let i = 0; i < grid.length; i++) {
      for (let j = 0; j < grid[i].length; j++) {
        if (grid[i][j] === " ") {
          return false;
        }
      }
    }
    // Return Tie T if all spaces filled
    return "T";
  }

  static endGame(winner) {
    if (winner === "O" || winner === "X") {
      Screen.setMessage(`Player ${winner} wins!`);
    } else if (winner === "T") {
      Screen.setMessage(`Tie game!`);
    } else {
      Screen.setMessage(`Game Over`);
    }
    Screen.render();
    Screen.quit();
  }
}

module.exports = ConnectFour;
