// Breadth-First Traversal

const adjList = {
  1: [2, 5],
  2: [1, 3, 5],
  3: [2, 4],
  4: [3, 5, 6],
  5: [1, 2, 4],
  6: [4],
};

function printBreadthFirst(start) {
  // your code here
  debugger;
  let queue = [];
  queue.push(start);
  let visited = new Set();
  while (queue.length > 0) {
    let node = queue.shift();

    visited.add(node);
    console.log(node);
    for (let i = 0; i < adjList[node].length; i++) {
      if (!visited.has(adjList[node][i]) && !queue.includes(adjList[node][i])) {
        queue.push(adjList[node][i]);
      }
    }
  }
}

console.log("First Test:");
printBreadthFirst(3); // Prints 1 through 6 in Breadth-first order, starting with 3
// One possible solution:  3, 2, 4, 1, 5, 6
console.log("Second Test:");
printBreadthFirst(6); // Prints 1 through 6 in Breadth-first order, starting with 6
// One possible solution:  6, 4, 3, 5, 2, 1
console.log("Third Test:");
printBreadthFirst(4); // Prints 1 through 6 in Breadth-first order, starting with 4
// One possible solution:  4, 3, 5, 6, 2, 1
