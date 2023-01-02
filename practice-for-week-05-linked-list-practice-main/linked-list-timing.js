const LinkedList = require("./linked-list.js");
const DoublyLinkedList = require("./doubly-linked-list.js");

/*
Construct a timing test to verify the time complexities of `addToHead` and
`addToTail` for both singly and doubly linked lists.
*/

// Your code here

let linkedList = new LinkedList();
let doublyLinkedList = new DoublyLinkedList();

startTimeLLHead = Date.now();
linkedList.addToHead(1);
linkedList.addToHead(2);
linkedList.addToHead(3);
endTimeLLHead = Date.now();

startTimeDLHead = Date.now();
doublyLinkedList.addToHead(1);
doublyLinkedList.addToHead(2);
doublyLinkedList.addToHead(3);
endTimeDLHead = Date.now();

console.log(linkedList.print());
console.log(doublyLinkedList.print());

console.log("linkedList.addToHead " + (endTimeLLHead - startTimeLLHead) + "ms");

console.log(
  "doublyLinkedList.addToHead " + (endTimeDLHead - startTimeDLHead) + "ms"
);

startTimeLLTail = Date.now();
linkedList.addToTail(1);
linkedList.addToTail(2);
linkedList.addToTail(3);

endTimeLLTail = Date.now();

startTimeDLTail = Date.now();
doublyLinkedList.addToTail(1);
doublyLinkedList.addToTail(2);
doublyLinkedList.addToTail(3);

endTimeDLTail = Date.now();

console.log(linkedList.print());
console.log(doublyLinkedList.print());
console.log("linkedList.addToTail " + (endTimeLLTail - startTimeLLTail) + "ms");

console.log(
  "doublyLinkedList.addToTail " + (endTimeDLTail - startTimeDLTail) + "ms"
);
