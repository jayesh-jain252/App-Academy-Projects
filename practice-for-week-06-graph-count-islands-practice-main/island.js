function getNeighbors(row, col, matrix) {
  // Check top
  // Check top right
  // Check right
  // Check bottom right
  // Check bottom
  // Check bottom left
  // Check left
  // Check top left
  // Return neighbors

  // Your code here
  let neighbors = [];
  // Top
  if (row - 1 >= 0 && matrix[row - 1][col] === 1) {
    neighbors.push([row - 1, col]);
  }
  // Top Right
  if (
    row - 1 >= 0 &&
    col + 1 < matrix[row].length &&
    matrix[row - 1][col + 1] === 1
  ) {
    neighbors.push([row - 1, col + 1]);
  }
  // Right
  if (col + 1 < matrix[row].length && matrix[row][col + 1] === 1) {
    neighbors.push([row, col + 1]);
  }
  // Bottom Right
  if (
    row + 1 < matrix.length &&
    col + 1 < matrix[row].length &&
    matrix[row + 1][col + 1] === 1
  ) {
    neighbors.push([row + 1, col + 1]);
  }
  // Bottom
  if (row + 1 < matrix.length && matrix[row + 1][col] === 1) {
    neighbors.push([row + 1, col]);
  }
  // Bottom Left
  if (
    row + 1 < matrix.length &&
    col - 1 >= 0 &&
    matrix[row + 1][col - 1] === 1
  ) {
    neighbors.push([row + 1, col - 1]);
  }
  // Left
  if (col - 1 >= 0 && matrix[row][col - 1] === 1) {
    neighbors.push([row, col - 1]);
  }
  // Top Left
  if (col - 1 >= 0 && row - 1 >= 0 && matrix[row - 1][col - 1] === 1) {
    neighbors.push([row - 1, col - 1]);
  }
  return neighbors;
}

function countIslands(matrix) {
  // Create a visited set to store visited nodes
  // Initialize count to 0
  // Iterate through all indices in matrix
  // If an index contains a 1 and has not been visited,
  // increment island count and start traversing neighbors
  // DO THE THING (increment island count by 1)
  // Initialize a stack with current index
  // Add stringified version of current index to the visited set
  // While stack contains elements
  // Pop element from stack
  // Get valid neighbors of current element
  // Iterate over neigbors
  // If neighbor has not been visited
  // Add neighbor to stack
  // Mark neighbor as visited
  // Return island count
  // Your code here
  debugger;
  let visited = new Set();
  let count = 0;
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === 1) {
        let currentNode = [i, j];
        let currentNodeString = currentNode.toString();
        if (!visited.has(currentNodeString)) {
          count++;
          let stack = [currentNode];
          visited.add(currentNodeString);
          while (stack.length > 0) {
            let node = stack.pop();
            let nodeString = node.toString();
            visited.add(nodeString);
            let neighbors = getNeighbors(node[0], node[1], matrix);
            for (let i = 0; i < neighbors.length; i++) {
              if (!visited.has(neighbors[i].toString()))
                stack.push(neighbors[i]);
            }
          }
        }
      }
    }
  }

  //   let traversal = [];

  //   while (stack.length > 0) {
  //     let currentNode = stack.pop();
  //     visited.add(currentNodeString);
  //     traversal.push(currentNode);

  //     let neighbors = getNeighbors(currentNode[0], currentNode[1], matrix);
  //     for (let i = 0; i < neighbors.length; i++) {
  //       stack.push(neighbors[i]);
  //     }
  //   }
  // }

  return count;
}

// Uncomment the lines below for local testing
const matrix = [
  [1, 0, 0],
  [0, 0, 1],
];

// console.log(getNeighbors(1, 1, matrix)); // [[0, 0], [0, 1], [0, 2], [1, 2], [2, 1], [2, 2]]
// console.log(getNeighbors(2,4, matrix)) // [[1,4]]

const matrix2 = [
  [1, 1, 1, 0, 1],
  [0, 0, 0, 0, 1],
  [1, 0, 0, 1, 0],
];

console.log(countIslands(matrix)); // 2
// console.log(countIslands(matrix2)); // 3

module.exports = [countIslands, getNeighbors];
