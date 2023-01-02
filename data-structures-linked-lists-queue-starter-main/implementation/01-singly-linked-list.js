// Node class is implemented for you, no need to look for bugs here!
class SinglyLinkedNode {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  addToHead(val) {
    // Add node of val to head of linked list
    let node = new SinglyLinkedNode(val);
    if (this.head === null) {
      this.head = node;
      this.length++;
      return this;
    }
    node.next = this.head;
    this.head = node;
    this.length++;
    return this;
    // Write your hypothesis on the time complexity of this method here
  }

  addToTail(val) {
    // There are bugs in this method! Fix them!!!
    // Write your hypothesis on the time complexity of this method here

    // Add node of val to tail of linked list
    let newNode = new SinglyLinkedNode(val);

    if (this.head === null) {
      this.head = newNode;
      this.length++;
      return this;
    }

    let curr = this.head;
    while (curr.next !== null) {
      curr = curr.next;
    }
    curr.next = newNode;
    this.length++;

    return this;
  }

  removeFromHead() {
    // Remove node at head
    let currHead = this.head;
    if (currHead === null) {
      return;
    }
    if (this.head.next === null) {
      this.head = null;
      this.length--;
      return currHead;
    }
    this.head = this.head.next;
    this.length--;
    return currHead;
    // Write your hypothesis on the time complexity of this method here
  }

  removeFromTail() {
    // Remove node at tail
    // Write your hypothesis on the time complexity of this method here
    if (this.head === null) {
      return;
    }
    if (this.head.next === null) {
      let currNode = this.head;
      this.head = null;
      this.length--;
      return currNode;
    }
    let curr = this.head;
    while (curr.next.next !== null) {
      curr = curr.next;
    }
    let nodeToDelete = curr.next;
    curr.next = null;
    this.length--;
    return nodeToDelete;
  }

  peekAtHead() {
    // Return value of head node
    // Write your hypothesis on the time complexity of this method here
    if (this.head === null) {
      return;
    }
    return this.head.value;
  }

  print() {
    // Print out the linked list
    // Write your hypothesis on the time complexity of this method here
    if (this.head === null) {
      return;
    }
    let current = this.head;

    while (current !== null) {
      console.log(`${current.value}`);
      current = current.next;
    }
    console.log("NULL");
  }
}

module.exports = {
  SinglyLinkedList,
  SinglyLinkedNode,
};

let linkedList = new SinglyLinkedList();
linkedList.addToTail("A");
linkedList.addToTail("B");
linkedList.addToTail("C");

console.log(linkedList.head.next.next);
linkedList.removeFromTail();
console.log(linkedList.head.next.next);
