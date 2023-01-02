// Do not change this
class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    // Your code here
    this.root = null;
  }

  insert(val, currentNode = this.root) {
    // Your code here
    let newNode = new TreeNode(val);
    if (this.root === null) {
      this.root = newNode;
      return newNode;
    }

    if (newNode.val < currentNode.val) {
      if (currentNode.left === null) currentNode.left = newNode;
      else this.insert(val, currentNode.left);
    } else {
      if (currentNode.right === null) currentNode.right = newNode;
      else this.insert(val, currentNode.right);
    }
  }

  search(val, currNode = this.root) {
    // Your code here

    if (currNode === null) {
      return false;
    }
    if (currNode.val === val) {
      return true;
    }
    if (val < currNode.val) {
      return this.search(val, currNode.left);
    }
    if (val > currNode.val) {
      return this.search(val, currNode.right);
    }
  }

  preOrderTraversal(currentNode = this.root) {
    // Your code here
    if (currentNode === null) {
      return;
    }
    console.log(currentNode.val);
    this.preOrderTraversal(currentNode.left);
    this.preOrderTraversal(currentNode.right);
  }

  inOrderTraversal(currentNode = this.root) {
    // debugger;
    // Your code here
    if (currentNode === null) {
      return;
    }
    this.inOrderTraversal(currentNode.left);
    console.log(currentNode.val);
    this.inOrderTraversal(currentNode.right);
  }

  postOrderTraversal(currentNode = this.root) {
    // Your code here
    if (currentNode === null) {
      return;
    }
    this.postOrderTraversal(currentNode.left);
    this.postOrderTraversal(currentNode.right);
    console.log(currentNode.val);
  }

  // Breadth First Traversal - Iterative
  breadthFirstTraversal(currNode = this.root) {
    // your code here
    const queue = [];

    if (currNode !== null) {
      queue.push(currNode);
    }

    // While the queue is not empty
    while (queue.length > 0) {
      // Dequeue a node and print it
      let node = queue.shift();
      if (node !== null) {
        console.log(node.val);
        // Put all of the node's children in the back of the queue
        queue.push(node.left);
        queue.push(node.right);
      }
    }
  }

  // Depth First Traversal - Iterative
  depthFirstTraversal(currNode = this.root) {
    // your code here
    const stack = [];
    stack.push(currNode);

    while (stack.length > 0) {
      let node = stack.pop();
      if (node !== null) {
        console.log(node.val);
        stack.push(node.left);
        stack.push(node.right);
      }
    }
  }
}

module.exports = { BinarySearchTree, TreeNode };
