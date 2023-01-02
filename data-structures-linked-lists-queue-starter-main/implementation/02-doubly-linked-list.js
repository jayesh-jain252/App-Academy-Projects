// Node class is implemented for you, no need to look for bugs here!
class DoublyLinkedNode {
  constructor(val) {
    this.value = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  addToHead(val) {
    // There are bugs in this method! Fix them!!!
    // Write your hypothesis on the time complexity of this method here

    // Add node of val to head of linked list
    let node = new DoublyLinkedNode(val);
    if (this.head === null) {
      this.head = node;
      this.tail = node;
    } else {
      node.next = this.head;
      this.head.prev = node;
      this.head = node;
    }
    this.length++;
  }

  addToTail(val) {
    // Add node of val to tail of linked list
    // Write your hypothesis on the time complexity of this method here
    let node = new DoublyLinkedNode(val);
    let lastNode = this.tail;
    if (lastNode === null) {
      this.tail = node;
      this.head = node;
    } else {
      this.tail.next = node;
      node.prev = this.tail;
      this.tail = node;
    }
    this.length++;
  }

  removeFromHead() {
    // Remove node at head
    // Write your hypothesis on the time complexity of this method here
    let currHead = this.head;
    if (currHead === null) {
      return;
    }
    if (this.head.next === null) {
      this.head = null;
      this.length--;
      return currHead.value;
    }
    this.head = this.head.next;
    this.head.prev = null;
    this.length--;
    return currHead.value;
  }

  removeFromTail() {
    // Remove node at tail
    // Write your hypothesis on the time complexity of this method here
    let currTail = this.tail;
    if (currTail === null) {
      return;
    }
    if (this.tail.prev === null) {
      this.tail = null;
      this.length--;
      return currTail.value;
    }
    this.tail = this.tail.prev;
    this.length--;
    return currTail.value;
  }

  peekAtHead() {
    // Return value of head node
    // Write your hypothesis on the time complexity of this method here
    if (this.head === null) {
      return;
    }
    return this.head.value;
  }

  peekAtTail() {
    // Return value of tail node
    // Write your hypothesis on the time complexity of this method here
    if (this.tail === null) {
      return;
    }
    return this.tail.value;
  }
}

module.exports = {
  DoublyLinkedList,
  DoublyLinkedNode,
};

let list = new DoublyLinkedList();
list.addToHead("C");
list.addToHead("B");
list.addToHead("A");
console.log(list.removeFromHead());
console.log(list.head.value);
console.log(list.removeFromHead());
console.log(list.head.value);
console.log(list.removeFromHead());
console.log(list.head);
