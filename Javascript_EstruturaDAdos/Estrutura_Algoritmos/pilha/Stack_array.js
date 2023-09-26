class Stack {
  constructor() {
    this.items = [];
  }
  //adiciona no inicio
  push(elem) {
    this.items.push(elem);
  }
  //excluir primeiro da lista
  pop() {
    return this.items.pop();
  }
  //devolve qual foi ultimo array
  peek() {
    return this.items[this.items.length - 1];
  }
  isEmpty() {
    return this.items.length === 0;
  }
  size() {
    return this.items.length;
  }
  clear() {
    this.items = [];
  }
}
//instanciamos
const stack = new Stack();

//adicionando
stack.push(5);
stack.push(8);
stack.push(3);
stack.push(1);
stack.push(13);

console.log("Foi adicionado: ", stack);
console.log("devolvendo ultimo : ", stack.peek());
console.log("quantidade : ", stack.size());
console.log("existe ? :", stack.isEmpty());
stack.push(11);
console.log(stack);
stack.pop();
stack.pop();
console.log(stack);
