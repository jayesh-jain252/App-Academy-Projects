class ComputerPlayer {
  static getValidMoves(grid) {
    // Your code here
    let validMoves = [];
    for (let i = 0; i < grid.length; i++) {
      let row = grid[i];
      for (let j = 0; j < row.length; j++) {
        if (row[j] === " ") {
          validMoves.push({ row: i, col: j });
        }
      }
    }
    return validMoves;
  }

  static randomMove(grid) {
    // Your code here
    let validMoves = ComputerPlayer.getValidMoves(grid);
    return validMoves[Math.floor(Math.random() * validMoves.length)];
  }

  static getBlockingMoves(grid, symbol) {
    let blockingMoves = [];
    for (let i = 0; i < grid.length; i++) {
      let row = grid[i];
      if (
        row[0] !== symbol &&
        row[0] !== " " &&
        row[0] === row[1] &&
        row[2] === " "
      ) {
        blockingMoves.push({ row: i, col: 2 });
      }
      if (
        row[0] !== symbol &&
        row[0] !== " " &&
        row[0] === row[2] &&
        row[1] === " "
      ) {
        blockingMoves.push({ row: i, col: 1 });
      }
      if (
        row[1] !== symbol &&
        row[1] !== " " &&
        row[1] === row[2] &&
        row[0] === " "
      ) {
        blockingMoves.push({ row: i, col: 0 });
      }
    }

    let row = grid[0];
    for (let i = 0; i < row.length; i++) {
      let colFirst = row[i];
      if (
        colFirst !== symbol &&
        colFirst !== " " &&
        colFirst === grid[1][i] &&
        grid[2][i] === " "
      ) {
        blockingMoves.push({ row: 2, col: i });
      }
      if (
        colFirst !== symbol &&
        colFirst !== " " &&
        colFirst === grid[2][i] &&
        grid[1][i] === " "
      ) {
        blockingMoves.push({ row: 1, col: i });
      }
      if (
        grid[1][i] !== symbol &&
        grid[1][i] !== " " &&
        grid[1][i] === grid[2][i] &&
        colFirst === " "
      ) {
        blockingMoves.push({ row: 0, col: i });
      }
    }

    if (
      grid[0][0] !== symbol &&
      grid[0][0] !== " " &&
      grid[0][0] === grid[1][1] &&
      grid[2][2] === " "
    ) {
      blockingMoves.push({ row: 2, col: 2 });
    }
    if (
      grid[0][0] !== symbol &&
      grid[0][0] !== " " &&
      grid[0][0] === grid[2][2] &&
      grid[1][1] === " "
    ) {
      blockingMoves.push({ row: 1, col: 1 });
    }
    if (
      grid[1][1] !== symbol &&
      grid[1][1] !== " " &&
      grid[1][1] === grid[2][2] &&
      grid[0][0] === " "
    ) {
      blockingMoves.push({ row: 0, col: 0 });
    }
    if (
      grid[0][2] !== symbol &&
      grid[0][2] !== " " &&
      grid[0][2] === grid[1][1] &&
      grid[2][0] === " "
    ) {
      blockingMoves.push({ row: 2, col: 0 });
    }
    if (
      grid[0][2] !== symbol &&
      grid[0][2] !== " " &&
      grid[0][2] === grid[2][0] &&
      grid[1][1] === " "
    ) {
      blockingMoves.push({ row: 1, col: 1 });
    }
    if (
      grid[1][1] !== symbol &&
      grid[1][1] !== " " &&
      grid[1][1] === grid[2][0] &&
      grid[0][2] === " "
    ) {
      blockingMoves.push({ row: 0, col: 2 });
    }
    return blockingMoves;
  }
  static getWinningMoves(grid, symbol) {
    // Your code here

    let winningMoves = [];
    for (let i = 0; i < grid.length; i++) {
      let row = grid[i];
      if (row[0] === symbol && row[0] === row[1] && row[2] === " ") {
        winningMoves.push({ row: i, col: 2 });
      }
      if (row[0] === symbol && row[0] === row[2] && row[1] === " ") {
        winningMoves.push({ row: i, col: 1 });
      }
      if (row[1] === symbol && row[1] === row[2] && row[0] === " ") {
        winningMoves.push({ row: i, col: 0 });
      }
    }

    let row = grid[0];
    for (let i = 0; i < row.length; i++) {
      let colFirst = row[i];
      if (
        colFirst === symbol &&
        colFirst === grid[1][i] &&
        grid[2][i] === " "
      ) {
        winningMoves.push({ row: 2, col: i });
      }
      if (
        colFirst === symbol &&
        colFirst === grid[2][i] &&
        grid[1][i] === " "
      ) {
        winningMoves.push({ row: 1, col: i });
      }
      if (
        grid[1][i] === symbol &&
        grid[1][i] === grid[2][i] &&
        colFirst === " "
      ) {
        winningMoves.push({ row: 0, col: i });
      }
    }

    if (
      grid[0][0] === symbol &&
      grid[0][0] === grid[1][1] &&
      grid[2][2] === " "
    ) {
      winningMoves.push({ row: 2, col: 2 });
    }
    if (
      grid[0][0] === symbol &&
      grid[0][0] === grid[2][2] &&
      grid[1][1] === " "
    ) {
      winningMoves.push({ row: 1, col: 1 });
    }
    if (
      grid[1][1] === symbol &&
      grid[1][1] === grid[2][2] &&
      grid[0][0] === " "
    ) {
      winningMoves.push({ row: 0, col: 0 });
    }
    if (
      grid[0][2] === symbol &&
      grid[0][2] === grid[1][1] &&
      grid[2][0] === " "
    ) {
      winningMoves.push({ row: 2, col: 0 });
    }
    if (
      grid[0][2] === symbol &&
      grid[0][2] === grid[2][0] &&
      grid[1][1] === " "
    ) {
      winningMoves.push({ row: 1, col: 1 });
    }
    if (
      grid[1][1] === symbol &&
      grid[1][1] === grid[2][0] &&
      grid[0][2] === " "
    ) {
      winningMoves.push({ row: 0, col: 2 });
    }
    return winningMoves;
  }

  static getWinningSecond(grid, symbol) {
    let count = 0;
    for (let i = 0; i < grid.length; i++) {
      let row = grid[i];
      for (let j = 0; j < row.length; j++) {
        if (row[j] !== " ") {
          count++;
        }
      }
    }

    if (count === 2) {
      let opponentPos;
      let ourPos;
      for (let i = 0; i < grid.length; i++) {
        let row = grid[i];
        for (let j = 0; j < row.length; j++) {
          if (row[j] !== " " && row[j] !== symbol) {
            opponentPos = { row: i, col: j };
          }
          if (row[j] !== " " && row[j] === symbol) {
            ourPos = { row: i, col: j };
          }
        }
      }

      if (opponentPos.row === 1 && opponentPos.col === 1) {
        return { row: 2, col: 2 };
      }

      if (opponentPos.row === 1 || opponentPos.row === 2) {
        return { row: 0, col: 2 };
      }
      if (opponentPos.row === 0) {
        return { row: 2, col: 0 };
      }
    }
    if (count === 3) {
      let opponentPos = [];
      let ourPos;
      for (let i = 0; i < grid.length; i++) {
        let row = grid[i];
        for (let j = 0; j < row.length; j++) {
          if (row[j] !== " " && row[j] !== symbol) {
            opponentPos.push({ row: i, col: j });
          }
          if (row[j] !== " " && row[j] === symbol) {
            ourPos = { row: i, col: j };
          }
        }
      }
      if (
        opponentPos[0].row === 0 &&
        opponentPos[0].col === 0 &&
        opponentPos[1].row === 2 &&
        opponentPos[1].col === 2
      ) {
        return { row: 0, col: 1 };
      }
      if (
        opponentPos[0].row === 0 &&
        opponentPos[0].col === 2 &&
        opponentPos[1].row === 2 &&
        opponentPos[1].col === 0
      ) {
        return { row: 0, col: 1 };
      }
      if (
        opponentPos[0].row === 1 &&
        opponentPos[0].col === 1 &&
        opponentPos[1].row === 2 &&
        opponentPos[1].col === 2
      ) {
        return { row: 0, col: 2 };
      }
      if (grid[1][1] === " ") {
        return { row: 1, col: 1 };
      }
      if (
        opponentPos[0].row === 0 &&
        opponentPos[0].col === 0 &&
        opponentPos[1].row === 2 &&
        opponentPos[1].col === 1
      ) {
        return { row: 2, col: 0 };
      }
      if (
        opponentPos[0].row === 0 &&
        opponentPos[0].col === 2 &&
        opponentPos[1].row === 2 &&
        opponentPos[1].col === 1
      ) {
        return { row: 2, col: 2 };
      }
      if (
        opponentPos[0].row === 0 &&
        opponentPos[0].col === 1 &&
        opponentPos[1].row === 2 &&
        opponentPos[1].col === 0
      ) {
        return { row: 0, col: 0 };
      }
      if (
        opponentPos[0].row === 0 &&
        opponentPos[0].col === 1 &&
        opponentPos[1].row === 2 &&
        opponentPos[1].col === 2
      ) {
        return { row: 0, col: 2 };
      }
      if (
        opponentPos[0].row === 0 &&
        opponentPos[0].col === 0 &&
        opponentPos[1].row === 1 &&
        opponentPos[1].col === 2
      ) {
        return { row: 0, col: 2 };
      }
      if (
        opponentPos[0].row === 0 &&
        opponentPos[0].col === 2 &&
        opponentPos[1].row === 1 &&
        opponentPos[1].col === 0
      ) {
        return { row: 0, col: 0 };
      }
      if (
        opponentPos[0].row === 1 &&
        opponentPos[0].col === 2 &&
        opponentPos[1].row === 2 &&
        opponentPos[1].col === 0
      ) {
        return { row: 2, col: 2 };
      }
      if (
        opponentPos[0].row === 1 &&
        opponentPos[0].col === 0 &&
        opponentPos[1].row === 2 &&
        opponentPos[1].col === 2
      ) {
        return { row: 2, col: 0 };
      }
      return { row: 0, col: 0 };
    }
  }

  static getOptimumFirstMove(grid, symbol) {
    let count = 0;
    for (let i = 0; i < grid.length; i++) {
      let row = grid[i];
      for (let j = 0; j < row.length; j++) {
        if (row[j] !== " ") {
          count++;
        }
      }
    }
    let opponentPos;
    if (count === 1) {
      for (let i = 0; i < grid.length; i++) {
        let row = grid[i];
        for (let j = 0; j < row.length; j++) {
          if (row[j] !== " " && row[j] !== symbol) {
            opponentPos = { row: i, col: j };
          }
        }
      }

      if (opponentPos.row === 1 && opponentPos.col === 1) {
        return { row: 0, col: 0 };
      } else {
        return { row: 1, col: 1 };
      }
    }
    if (count === 0) {
      return { row: 0, col: 0 };
    }
  }

  static getWinningThirdMove(grid, symbol) {
    let count = 0;
    for (let i = 0; i < grid.length; i++) {
      let row = grid[i];
      for (let j = 0; j < row.length; j++) {
        if (row[j] !== " ") {
          count++;
        }
      }
    }

    if (count === 4) {
      let opponentPos = [];
      let ourPos = [];
      for (let i = 0; i < grid.length; i++) {
        let row = grid[i];
        for (let j = 0; j < row.length; j++) {
          if (row[j] !== " " && row[j] !== symbol) {
            opponentPos.push({ row: i, col: j });
          }
          if (row[j] !== " " && row[j] === symbol) {
            ourPos.push({ row: i, col: j });
          }
        }
      }
      if (opponentPos[1].col === 0 || opponentPos[1].col === 1) {
        return { row: 2, col: 2 };
      }
      if (opponentPos[1].col === 2) {
        return { row: 2, col: 0 };
      }
    }
  }

  static getTieMove(grid, symbol) {
    let count = 0;
    for (let i = 0; i < grid.length; i++) {
      let row = grid[i];
      for (let j = 0; j < row.length; j++) {
        if (row[j] !== " ") {
          count++;
        }
      }
    }
    let opponentPos = [];
    if (count === 3) {
      for (let i = 0; i < grid.length; i++) {
        let row = grid[i];
        for (let j = 0; j < row.length; j++) {
          if (row[j] !== " " && row[j] !== symbol) {
            opponentPos.push({ row: i, col: j });
          }
        }
      }

      if (
        opponentPos[0].row === 0 &&
        opponentPos[0].col === 0 &&
        opponentPos[1].row === 2 &&
        opponentPos[1].col === 2
      ) {
        return { row: 0, col: 1 };
      }
      if (
        opponentPos[0].row === 0 &&
        opponentPos[0].col === 2 &&
        opponentPos[1].row === 2 &&
        opponentPos[1].col === 0
      ) {
        return { row: 0, col: 1 };
      }
    }
  }
  static getSmartMove(grid, symbol) {
    // Your code here
    let optimumFirstMove = this.getOptimumFirstMove(grid, symbol);
    let winningSecondMove = this.getWinningSecond(grid, symbol);
    let winningThirdMove = this.getWinningThirdMove(grid, symbol);
    let tieMove = this.getTieMove(grid, symbol);
    let winningMoves = this.getWinningMoves(grid, symbol);
    let blockingMoves = this.getBlockingMoves(grid, symbol);

    if (optimumFirstMove !== undefined) {
      return optimumFirstMove;
    }

    if (
      winningSecondMove !== undefined &&
      winningMoves.length === 0 &&
      blockingMoves.length === 0
    ) {
      return winningSecondMove;
    }
    if (
      winningThirdMove !== undefined &&
      winningMoves.length === 0 &&
      blockingMoves.length === 0
    ) {
      return winningThirdMove;
    }

    if (tieMove !== undefined) {
      return tieMove;
    }
    if (winningMoves.length === 0 && blockingMoves.length === 0) {
      return ComputerPlayer.randomMove(grid);
    }
    if (winningMoves.length === 0) {
      return blockingMoves[0];
    }
    return winningMoves[0];
  }
}

module.exports = ComputerPlayer;
