const { SinglyLinkedNode } = require("./01-singly-linked-list");

class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  enqueue(val) {
    // Add node to end of queue (linked list)

    let newNode = new SinglyLinkedNode(val);
    if (this.tail === null) {
      this.tail = newNode;
      this.head = newNode;
      this.length++;
      return this.length;
    }
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this.length;
    // Write your hypothesis on the time complexity of this method here
  }

  dequeue() {
    // Remove node from front of queue (linked list)
    // Write your hypothesis on the time complexity of this method here
    let currHead = this.head;
    if (currHead === null) {
      return null;
    }
    if (currHead.next === null) {
      this.head = null;
      this.tail = null;
      this.length--;
      return currHead.value;
    }
    this.head = this.head.next;
    this.length--;
    return currHead.value;
  }
}

module.exports = {
  Queue,
  SinglyLinkedNode,
};
