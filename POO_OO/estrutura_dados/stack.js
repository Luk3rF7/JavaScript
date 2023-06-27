// pilha
/* 

* push -> adiciona um elemento a pilha
* pop -> remover o elemento do topo da pilha
* peek -> obter o elemento do topo da pilha
*/

class stack {
  constructor() {
    this.data = [];
    this.top = -1;
  }

  push(value) {
    this.top++;
    this.data[this.top] = value;
    return this.data;
  }
  pop() {
    if (this.top < 0) return undefined;
    const poppedTop = this.data[this.top];
    delete this.data[this.top];
    this.top--;
    return poppedTop;
  }

  peek() {
    return this.top >= 0 ? this.data[this.top] : undefined;
  }
}

const stack = new stack();

//add dados

stack.push("leaning");
stack.push("leaning");
console.log(stack.push("strutuct"));

//ver
console.log(stack.peek());
console.log(stack);

//remover
stack.pop();
