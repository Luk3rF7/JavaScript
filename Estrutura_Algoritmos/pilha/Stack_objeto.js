class Stack {
  constructor() {
    this.count = 0;
    this.items = {};
  }

  // * inserindo no obj
  push(elem) {
    this.items[this.count] = elem;
    this.count++;
  }
  pop() {
    // * verificamos se pilha esta vazia
    if (this.isEmpty()) {
      // * se pilha estiver vazia
      return undefined;
    }
    // * se nao tiver vazia
    // * amazenaremos o valor no topo
    // * decrementamos e armazenamos valor ao topo
    this.count--;
    // * para que possamo devolve=lo
    const result = this.items[this.count];
    // * como trabalhamos com obj usamos delete
    delete this.items[this.count];
    return result;
  }
  size() {
    return this.count;
  }
  isEmpty() {
    return this.count === 0;
  }
  peek() {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.items[this.count - 1];
  }
  clear() {
    this.items = {};
    this.count = 0;
    /*
    * podemos utiliza logiga
    * while(!this.isEmpty()){
    *  this.pop();
    }
     */
  }
  // metodo que convertera em stirng o obj
  toString() {
    //se pilha for vazia retorna string vazia
    if (this.isEmpty()) {
      return "";
    }
    //fazer iteracao
    let objString = `${this.items[0]}`;
    //fazer iteracao  por toda chave
    for (let i = 1; i < this.count; i++) {
      obString = `${obString},${this.items[i]}`;
    }
    return objString;
  }
}
const stack = new Stack();
stack.push(5);
stack.push(8);

module.exports = stack;
// * conversao binaria

function decimalToBinary(decNumber) {
  const remStack = new Stack();
  let number = decNumber;
  let rem;
  let binaryString = "";
  while (number > 0) {
    // {1}
    rem = Math.floor(number % 2); // {2}
    remStack.push(rem); // {3}
    number = Math.floor(number / 2); // {4}
  }
  while (!remStack.isEmpty()) {
    // {5}
    binaryString += remStack.pop().toString();
  }
  return binaryString;
}
console.log(decimalToBinary(233)); // 11101001
console.log(decimalToBinary(10)); // 1010
console.log(decimalToBinary(1000)); // 1111101000
