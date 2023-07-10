/*
 * Algoritmo List aplicando ADT
 */

function List() {
  let dataStore = [];
  let pos = 0;

  return {
    prev,
    next,
    getByPosition,
    getCurrent,
    length,
    clear,
    insert,
    append,
    remove,
    front,
    end,
    moveTo,
    toString,
  };

  function find(value) {
    return dataStore.findIndex(function (el) {
      return el === value;
    });
  }

  function prev() {
    if (pos > 0) {
      --pos;
    }
  }

  function next() {

    if (pos < dataStore.length - 1) {
      ++pos;
    }
  }

  function getByPosition(position) {
    return dataStore[position];
  }

  function getCurrent() {
    return dataStore[pos];
  }

  function length() {
    return dataStore.length;
  }

  function clear() {
    dataStore = [];
  }

  function insert(value, after) {
    const index = find(after);
    dataStore.splice(index + 1, 0, value);
  }

  function append(value) {
    dataStore.push(value);
  }

  function remove(value) {
    // [].splice(value, index, 1)
    const index = find(value);

    dataStore.splice(index, 1);
  }

  function front() {
    return dataStore[0];
  }

  function end() {
    return dataStore[dataStore.length - 1];
  }

  function moveTo(position) {
    pos = position;
  }

  function toString() {
    console.log(dataStore);
  }
}

const l = List();
l.append("Image1.png");
l.append("Image2.png");
l.append("Image3.png");

l.toString();

console.log(l.getCurrent());
l.next();
console.log(l.getCurrent());
l.next();
console.log(l.getCurrent());

l.prev();
console.log(l.getCurrent());
l.prev();
console.log(l.getCurrent());

console.log(l.getByPosition(2));

l.insert("Image2.2.png", "Image2.png");
l.toString();

console.log(l.front());
console.log(l.end());

l.moveTo(1);
console.log(l.getCurrent());
l.next();
console.log(l.getCurrent());
