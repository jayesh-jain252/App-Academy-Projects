function getNeighbors(row, col, graph) {
  // Check top

  // Check bottom

  // Check left

  // Check right

  // Return neighbors

  // Your code here
  let neighbors = [];
  // Up
  if (row - 1 >= 0 && graph[row - 1][col] === 1) {
    neighbors.push([row - 1, col]);
  }
  // Down
  if (row + 1 < graph.length && graph[row + 1][col] === 1) {
    neighbors.push([row + 1, col]);
  }
  // Left
  if (col - 1 >= 0 && graph[row][col - 1] === 1) {
    neighbors.push([row, col - 1]);
  }
  // Right
  if (col + 1 < graph[row].length && graph[row][col + 1] === 1) {
    neighbors.push([row, col + 1]);
  }
  return neighbors;
}

function islandSize(row, col, graph) {
  // Create a visited set to store visited nodes
  // Create a stack, put the starting node in the stack
  // Put the stringified starting node in visited
  // Initialize size to 0
  // While the stack is not empty,
  // Pop the first node
  // DO THE THING (increment size by 1)
  // Then push all the UNVISITED neighbors on top of the stack
  // and mark them as visited
  // HINT: This is what your helper function `getNeighbors` is for
  // HINT: Remember, you're storing your visited nodes as strings!
  // return size
  // Your code here
  // debugger;
  let stack = [];
  let traversal = [];
  stack.push([row, col]);
  let visited = new Set();

  while (stack.length > 0) {
    let currentNode = stack.pop();
    let currentNodeString = currentNode.toString();
    if (!visited.has(currentNodeString)) {
      visited.add(currentNodeString);
      traversal.push(currentNode);

      let neighbors = getNeighbors(currentNode[0], currentNode[1], graph);
      for (let i = 0; i < neighbors.length; i++) {
        stack.push(neighbors[i]);
      }
    }
  }

  return traversal.length;
}

module.exports = [getNeighbors, islandSize];

// matrix = [
//   [1, 1, 1, 0, 0],
//   [0, 1, 1, 0, 1],
//   [0, 1, 1, 0, 1],
// ];

// console.log(islandSize(0, 0, matrix)); // 7
// console.log(islandSize(2, 4, matrix)); // 2
