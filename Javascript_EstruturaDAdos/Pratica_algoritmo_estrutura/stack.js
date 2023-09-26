/*
 * Algoritmo Stack aplicando ADT
 */

function Stack() {
  let dataStore = [];

  return {
    push,
    pop,
    peek,
    clear,
  };

  function push(value) {
    dataStore.push(value);
  }

  function pop() {
    return dataStore.pop();
  }
  function peek() {
    return dataStore[dataStore.length - 1];
  }
  function clear() {
    dataStore = [];
  }
}

const s = Stack();
s.push("Brasil");
s.push("Uruguai");
s.push("Chile");

console.log(s.peek());
console.log(s.peek());
console.log(s.pop());
console.log(s.peek());

s.pop();
console.log(s.peek());
