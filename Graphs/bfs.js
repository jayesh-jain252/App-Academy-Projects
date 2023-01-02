const adjList = {
  1: [2, 5],
  2: [1, 3, 5],
  3: [2, 4],
  4: [3, 5],
  5: [1, 2, 4],
  6: [],
};

function breadthFirstSearch(start, end) {
  // your code here
  debugger;
  let queue = [];
  queue.push(start);
  let visited = new Set();
  while (queue.length > 0) {
    let node = queue.shift();
    if (node === end) {
      return true;
    }
    visited.add(node);

    for (let i = 0; i < adjList[node].length; i++) {
      if (!visited.has(adjList[node][i]) && !queue.includes(adjList[node][i])) {
        queue.push(adjList[node][i]);
      }
    }
  }
  return false;
}

console.log("First Test:");
console.log(breadthFirstSearch(1, 3)); // -> true
console.log("Second Test:");
console.log(breadthFirstSearch(4, 1)); // -> true
console.log("Third Test:");
console.log(breadthFirstSearch(6, 1)); // -> false
