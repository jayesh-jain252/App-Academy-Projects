// Basic implementation of Nodes and Linked List for you to use

class SinglyLinkedNode {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor(head = null) {
    this.head = head;
  }

  addToTail(val) {
    let newNode = new SinglyLinkedNode(val);

    if (!this.head) {
      this.head = newNode;
      return this.head;
    }

    let curr = this.head;
    while (curr.next) {
      curr = curr.next;
    }

    curr.next = newNode;
    return this.head;
  }

  listLength() {
    // Returns the length of the list
    let curr = this.head;
    let length = 0;
    if (this.head === null) {
      return length;
    }
    while (curr) {
      curr = curr.next;
      length++;
    }
    return length;
    // Implement in O(n) and in O(1) time complexity
  }

  sumOfNodes() {
    // Returns the sum of the values of all the nodes
    // Write your hypothesis on the time complexity of this method here
    let curr = this.head;
    let sum = 0;
    if (this.head === null) {
      return sum;
    }
    while (curr) {
      sum += curr.value;
      curr = curr.next;
    }
    return sum;
  }

  averageValue() {
    // Returns the average value of all the nodes
    // Write your hypothesis on the time complexity of this method here
    if (this.head === null) {
      return;
    }
    return this.sumOfNodes() / this.listLength();
  }

  findNthNode(n) {
    // Returns the node at the nth index from the head
    let curr = this.head;
    let length = 0;
    if (this.head === null) {
      return;
    }
    while (curr) {
      if (length === n) {
        return curr;
      }
      curr = curr.next;
      length++;
    }
    return -1;
    // Write your hypothesis on the time complexity of this method here
  }

  findMid() {
    // Returns the middle node
    // Implement this as a singly linked list then as a doubly linked list
    // How do the implementation for singly and doubly vary if at all?
    // Write your hypothesis on the time complexity of this method here
    let mid;
    if (this.listLength() % 2 === 0) {
      mid = Math.floor(this.listLength() / 2) - 1;
    } else {
      mid = Math.floor(this.listLength() / 2);
    }

    return this.findNthNode(mid);
  }

  reverse() {
    // Returns a new reversed version of the linked list
    // Write your hypothesis on the time complexity of this method here
    let lengthOfList = this.listLength();
    let reversed = new SinglyLinkedList();
    for (let i = lengthOfList - 1; i >= 0; i--) {
      let node = this.findNthNode(i);
      reversed.addToTail(node.value);
    }
    return reversed;
  }

  reverseInPlace() {
    // Reverses the linked list in-place
    // Write your hypothesis on the time complexity of this method here
    var prev = null;
    var current = this.head;
    var next = null;
    while (current != null) {
      next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }
    current = prev;
    this.head = current;
  }
}

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
  }

  addToTail(val) {
    let newNode = new DoublyLinkedNode(val);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      return this.head;
    }

    this.tail.next = newNode;
    newNode.prev = this.tail;
    this.tail = newNode;

    return this.head;
  }

  listLength() {
    let curr = this.head;
    let length = 0;
    if (this.head === null) {
      return length;
    }
    while (curr) {
      curr = curr.next;
      length++;
    }
    return length;
  }

  findNthNode(n) {
    // Returns the node at the nth index from the head
    let curr = this.head;
    let length = 0;
    if (this.head === null) {
      return;
    }
    while (curr) {
      if (length === n) {
        return curr;
      }
      curr = curr.next;
      length++;
    }
    return -1;
    // Write your hypothesis on the time complexity of this method here
  }

  findMid() {
    // Returns the middle node
    // Implement this as a singly linked list then as a doubly linked list
    // How do the implementation for singly and doubly vary if at all?
    // Write your hypothesis on the time complexity of this method here
    let mid;
    if (this.listLength() % 2 === 0) {
      mid = Math.floor(this.listLength() / 2) - 1;
    } else {
      mid = Math.floor(this.listLength() / 2);
    }

    return this.findNthNode(mid);
  }

  reverse() {
    // Returns a new reversed version of the linked list
    // Write your hypothesis on the time complexity of this method here
    let lengthOfList = this.listLength();
    let reversed = new DoublyLinkedList();
    for (let i = lengthOfList - 1; i >= 0; i--) {
      let node = this.findNthNode(i);
      reversed.addToTail(node.value);
    }
    return reversed;
  }

  reverseInPlace() {
    // Reverses the linked list in-place
    // Write your hypothesis on the time complexity of this method here
    var temp = null;
    var current = this.head;

    while (current != null) {
      temp = current.prev;
      current.prev = current.next;
      current.next = temp;
      current = current.prev;
    }

    if (temp != null) {
      this.head = temp.prev;
    }
  }
}

module.exports = {
  SinglyLinkedNode,
  SinglyLinkedList,
  DoublyLinkedNode,
  DoublyLinkedList,
};

let dll = new DoublyLinkedList();
dll.addToTail(1);
dll.addToTail(2);
dll.addToTail(3);
dll.addToTail(4);
dll.addToTail(5);
dll.addToTail(6);

dll.reverseInPlace();

console.log(dll);
