//private com Symbol
const _items = Symbol("stackItems");
class Stack {
  constructor() {
    this[_items] = [];
  }
}

const stack = new Stack();

stack.push(5);
stack.push(8);
console.log(stack);

// * private com WeakMap

const items = new WeakMap(); // {1}
class Stack {
  constructor() {
    items.set(this, []); // {2}
  }
  push(element) {
    const s = items.get(this); // {3}
    s.push(element);
  }
  pop() {
    const s = items.get(this);
    const r = s.pop();
    return r;
  }
  //outros métodos
}
