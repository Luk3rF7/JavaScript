/*
 * Algoritmo Queue aplicando ADT
 */

function Queue() {
  const dataStore = [];
  return {
    enqueue,
    dequeue,
    front,
    end,
    clear,
    toString,
  };

  function enqueue(value) {
    dataStore.push(value);
  }

  function dequeue() {
    return dataStore.shift();
  }

  function front() {
    return dataStore[0];
  }

  function end() {
    return dataStore[dataStore.length - 1];
  }

  function clear() {
    dataStore = [];
  }

  function toString() {
    console.log(dataStore);
  }
}

const q = Queue();
q.enqueue("fn1");
q.enqueue("fn2");
q.enqueue("fn3");
q.enqueue("fn4");

q.toString();

console.log(q.dequeue());
console.log(q.dequeue());

q.toString();
