const Screen = require("./screen");
const Cursor = require("./cursor");

class TTT {
  constructor() {
    this.playerTurn = "O";
    this.player2Turn = "X";

    this.grid = [
      [" ", " ", " "],
      [" ", " ", " "],
      [" ", " ", " "],
    ];

    this.cursor = new Cursor(3, 3);

    // Initialize a 3x3 tic-tac-toe grid
    Screen.initialize(3, 3);
    Screen.setGridlines(true);

    // Replace this with real commands

    this.cursor.setBackgroundColor();
    // Screen.addCommand("t", "test command (remove)", TTT.testCommand);
    Screen.addCommand("down", "move Down", this.moveDown);
    Screen.addCommand("up", "move Up", this.moveUp);
    Screen.addCommand("left", "move Left", this.moveLeft);
    Screen.addCommand("right", "move Right", this.moveRight);
    Screen.addCommand("o", "Place O at given cursor", this.placeMove);
    Screen.addCommand("x", "Place X at given cursor", this.place2Move);

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
    this.grid[this.cursor.row][this.cursor.col] = this.playerTurn;
    Screen.setGrid(this.cursor.row, this.cursor.col, this.playerTurn);
    Screen.render();
    if (TTT.checkWin(this.grid) !== false) {
      TTT.endGame(TTT.checkWin(this.grid));
    }
  };

  place2Move = () => {
    this.grid[this.cursor.row][this.cursor.col] = this.player2Turn;
    Screen.setGrid(this.cursor.row, this.cursor.col, this.player2Turn);
    Screen.render();
    if (TTT.checkWin(this.grid) !== false) {
      TTT.endGame(TTT.checkWin(this.grid));
    }
  };

  static checkWin(grid) {
    // Return 'X' if player X wins
    // Return 'O' if player O wins
    // Return 'T' if the game is a tie
    // Return false if the game has not ended
    for (let i = 0; i < grid.length; i++) {
      let row = grid[i];
      if (row[0] !== " " && row[0] === row[1] && row[1] === row[2]) {
        return row[0];
      }
    }

    let row = grid[0];
    for (let i = 0; i < row.length; i++) {
      let colFirst = row[i];
      if (
        colFirst !== " " &&
        colFirst === grid[1][i] &&
        grid[1][i] === grid[2][i]
      ) {
        return colFirst;
      }
    }
    if (
      grid[0][0] !== " " &&
      grid[0][0] === grid[1][1] &&
      grid[1][1] === grid[2][2]
    ) {
      return grid[0][0];
    }
    if (
      grid[0][2] !== " " &&
      grid[0][2] === grid[1][1] &&
      grid[1][1] === grid[2][0]
    ) {
      return grid[0][2];
    }
    for (let i = 0; i < grid.length; i++) {
      for (let j = 0; j < grid[i].length; j++) {
        if (grid[i][j] === " ") {
          return false;
        }
      }
    }
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

module.exports = TTT;

// let ticTacToe = new TTT();
// console.log(ticTacToe);

// ticTacToe.moveDown();
// ticTacToe.placeMove();

// console.log(ticTacToe.grid);
