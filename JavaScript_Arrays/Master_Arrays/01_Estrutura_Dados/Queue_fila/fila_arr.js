/* 
 todo Estrutura de dado de fila:
 * Uma fila é uma lista ordenada de elementos em que um elemento é inserido no 
 * final da fila e elementos são removidos na frente da fila.
 * Uma fila funciona com base no princípio FIFO (first in, first out),
 * ou seja, o primeiro a entrar é o primeiro a sair.
*/
// * funcional :
function Queue() {
  this.elements = []
}

// enqueue method adds an element at the end of the queue 
Queue.prototype.enqueue = function (e) {
  // insert the new element 
  this.elements.push(e);
}

// remove an element from the front of the queue
Queue.prototype.dequeue = function () {
  return this.elements.shift();
}

// check if the queue is empty
Queue.prototype.isEmpty = function () {
  return this.elements.length == 0;
}

// get the element at the front of the queue
Queue.prototype.peek = function () {
  return !this.isEmpty() ? this.elements[0] : undefined;
}

// to query the length of a queue
Queue.prototype.length = function () {
  return this.elements.length;
}

// to create a neq queue from the Queue() contructor function
let q = new Queue();

// to enqueue numbers from 1 to 7 
for (let i = 1; i <= 7; i++) {
  q.enqueue(i);
}

// to get the value of the q variable 
console.log(q);

// to get the number at the front of the queue 
console.log(`Number at the front of the queue: ${q.peek()}`);

//to get the current length of the queue
console.log(`The length of the queue: ${q.length()}`);

// to remove the element at the front of the queue (dequeue all elements)
while (!q.isEmpty()) {
  console.log(q.dequeue());
}

class Stack {
  constructor() {
    this.elements = []
  }
}