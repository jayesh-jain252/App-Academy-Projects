const { BinarySearchTree, TreeNode } = require("./binary-search-tree.js");
// Before starting, copy and paste your guided practice work into the copy
// of `binary-search-tree.js` in this folder

// Practice problems on binary trees

function findMinBST(currNode = rootNode) {
  // Your code here
  if (currNode === null) {
    return;
  }
  if (currNode.left === null) {
    return currNode.val;
  }

  return findMinBST(currNode.left);
}

function findMaxBST(currNode = rootNode) {
  // Your code here
  if (currNode === null) {
    return;
  }
  if (currNode.right === null) {
    return currNode.val;
  }

  return findMaxBST(currNode.right);
}

function findMinBT(currNode = rootNode) {
  // Your code here
  let min = currNode.val;
  const queue = [];

  if (currNode !== null) {
    queue.push(currNode);
  }

  // While the queue is not empty
  while (queue.length > 0) {
    // Dequeue a node and print it
    let node = queue.shift();
    if (node !== null) {
      // console.log(node.val);
      // Put all of the node's children in the back of the queue
      if (node.left !== null && node.left.val < min) {
        min = node.left.val;
      }
      if (node.right !== null && node.right.val < min) {
        min = node.right.val;
      }
      if (node.left !== null) queue.push(node.left);
      if (node.right !== null) queue.push(node.right);
    }
  }
  return min;
}

function findMaxBT(currNode = rootNode) {
  // Your code here
  // debugger;
  let max = currNode.val;
  const queue = [];

  if (currNode !== null) {
    queue.push(currNode);
  }

  // While the queue is not empty
  while (queue.length > 0) {
    // Dequeue a node and print it
    let node = queue.shift();
    if (node !== null) {
      // console.log(node.val);
      // Put all of the node's children in the back of the queue
      if (node.left !== null && node.left.val > max) {
        max = node.left.val;
      }
      if (node.right !== null && node.right.val > max) {
        max = node.right.val;
      }
      if (node.left !== null) queue.push(node.left);
      if (node.right !== null) queue.push(node.right);
    }
  }
  return max;
}

function getHeight(currNode = rootNode) {
  // Your code here
  debugger;
  if (currNode == null) return -1;
  else {
    /* compute the depth of each subtree */
    let lDepth = getHeight(currNode.left);
    let rDepth = getHeight(currNode.right);

    /* use the larger one */
    if (lDepth > rDepth) return lDepth + 1;
    else return rDepth + 1;
  }
}

function countNodes(currNode = rootNode) {
  // Your code here
  let count = 0;
  const queue = [];

  if (currNode !== null) {
    queue.push(currNode);
  }

  // While the queue is not empty
  while (queue.length > 0) {
    // Dequeue a node and print it
    let node = queue.shift();
    if (node !== null) {
      // console.log(node.val);
      // Put all of the node's children in the back of the queue
      if (node.left !== null) queue.push(node.left);
      if (node.right !== null) queue.push(node.right);
      count++;
    }
  }
  return count;
}

function balancedTree(currNode = rootNode) {
  // Your code here
  if (currNode.left === null && currNode.right === null) {
    return true;
  }
  if (currNode.left === null && currNode.right !== null) {
    return false;
  }
  if (currNode.right === null && currNode.left !== null) {
    return false;
  }
  let checkLeft = balancedTree(currNode.left);
  let checkRight = balancedTree(currNode.right);

  if (checkLeft === false || checkRight === false) {
    return false;
  }
  return true;
}

function getParentNode(rootNode, target) {
  // Your code here
  if (rootNode.val === target) {
    return null;
  }
  const queue = [];

  if (rootNode !== null) {
    queue.push(rootNode);
  }

  // While the queue is not empty
  while (queue.length > 0) {
    // Dequeue a node and print it
    let node = queue.shift();
    if (node !== null) {
      // console.log(node.val);
      // Put all of the node's children in the back of the queue
      if (node.left !== null && node.left.val === target) {
        return node;
      }
      if (node.right !== null && node.right.val === target) {
        return node;
      }
      if (node.left !== null) queue.push(node.left);
      if (node.right !== null) queue.push(node.right);
    }
  }
  return;
}

function inOrderTraversal(currentNode = rootNode, inOrder) {
  if (currentNode === null) {
    return;
  }
  inOrderTraversal(currentNode.left, inOrder);
  inOrder.push(currentNode.val);
  inOrderTraversal(currentNode.right, inOrder);
}

function inOrderPredecessor(currentNode = rootNode, target) {
  // Your code here
  let inOrder = [];
  inOrderTraversal(currentNode, inOrder);
  let indexOfTarget = inOrder.indexOf(target);
  if (indexOfTarget > 0) {
    return inOrder[indexOfTarget - 1];
  }
  return null;
}

function search(currNode = rootNode, target) {
  if (currNode === null) {
    return [null, null];
  }
  if (currNode.val === target) {
    return [null, currNode];
  }
  if (currNode.left !== null && currNode.left.val === target) {
    return [currNode, currNode.left];
  }
  if (currNode.right !== null && currNode.right.val === target) {
    return [currNode, currNode.right];
  }
  if (target < currNode.val) {
    return search(currNode.left, target);
  }
  if (target > currNode.val) {
    return search(currNode.right, target);
  }
}

function deleteNodeBST(currNode = rootNode, target) {
  // Do a traversal to find the node. Keep track of the parent
  // Undefined if the target cannot be found
  // Set target based on parent
  // Case 0: Zero children and no parent:
  //   return null
  // Case 1: Zero children:
  //   set the parent that points to it to null
  // Case 2: Two children:
  //   set the value to its in-order predecessor, then delete the predecessor
  // Case 3: One child:
  //   Make the parent point to the child
  let nodeToDelete, parent;
  [parent, nodeToDelete] = search(currNode, target); //list of parent and node to delete
  if (nodeToDelete === null) {
    return;
  }
  if (nodeToDelete.left === null && nodeToDelete.right === null) {
    if (parent === null) {
      nodeToDelete = null;
      return;
    }
    if (parent !== null && parent.left.val === nodeToDelete.val) {
      parent.left = null;
      nodeToDelete = null;
      return;
    }
    if (parent !== null && parent.right.val === nodeToDelete.val) {
      parent.right = null;
      nodeToDelete = null;
      return;
    }
  }

  if (nodeToDelete.left !== null && nodeToDelete.right !== null) {
    let max = inOrderPredecessor(nodeToDelete, target);
    nodeToDelete.val = max;
    if (nodeToDelete.left !== null && nodeToDelete.left.val === max) {
      nodeToDelete.left = null;
    }
    if (nodeToDelete.right !== null && nodeToDelete.right.val === max) {
      nodeToDelete.right = null;
    }

    return deleteNodeBST(nodeToDelete.left, max);
  }

  if (nodeToDelete.left !== null && nodeToDelete.right === null) {
    if (parent.val > nodeToDelete.val) parent.left = nodeToDelete.left;
    else parent.right = nodeToDelete.left;
    nodeToDelete = null;
    return;
  }

  if (nodeToDelete.right !== null && nodeToDelete.left === null) {
    if (parent.val > nodeToDelete.val) parent.left = nodeToDelete.right;
    else parent.right = nodeToDelete.right;

    nodeToDelete = null;
    return;
  }
  return;
}

module.exports = {
  findMinBST,
  findMaxBST,
  findMinBT,
  findMaxBT,
  getHeight,
  countNodes,
  balancedTree,
  getParentNode,
  inOrderPredecessor,
  deleteNodeBST,
};

let bstRoot;
bstRoot = new TreeNode(4);
bstRoot.left = new TreeNode(2);
bstRoot.left.left = new TreeNode(1);
bstRoot.left.right = new TreeNode(3);
bstRoot.right = new TreeNode(6);
bstRoot.right.left = new TreeNode(5);
bstRoot.right.right = new TreeNode(7);

//      4
//    /   \
//   2     6
//  / \   / \
// 1   3 5   7
deleteNodeBST(bstRoot, 6);
console.log(bstRoot);
