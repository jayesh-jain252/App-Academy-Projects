/**
 * @param {character[][]} grid
 * @return {number}
 */
function getNeighbours(row, col, grid) {
  let neighbours = [];
  if (row - 1 >= 0 && grid[row - 1][col] === 1) {
    neighbours.push([row - 1, col]);
  }
  if (row + 1 < grid.length && grid[row + 1][col] === 1) {
    neighbours.push([row + 1, col]);
  }
  if (col - 1 >= 0 && grid[row][col - 1] === 1) {
    neighbours.push([row, col - 1]);
  }
  if (col + 1 < grid[row].length && grid[row][col + 1] === 1) {
    neighbours.push([row, col + 1]);
  }
  return neighbours;
}

var numIslands = function (grid) {
  let count = 0;
  let visited = new Set();
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === 1) {
        let node = [i, j];
        let nodeToString = node.toString();
        if (!visited.has(nodeToString)) {
          count++;
          let stack = [];
          visited.add(nodeToString);
          stack.push(node);
          while (stack.length > 0) {
            let currNode = stack.pop();
            let currNodeString = currNode.toString();
            visited.add(currNodeString);
            let neighbours = getNeighbours(currNode[0], currNode[1], grid);
            for (let k = 0; k < neighbours.length; k++) {
              if (!visited.has(neighbours[i].toString())) {
                stack.push(neighbours[i]);
              }
            }
          }
        }
      }
    }
  }
  return count;
};
