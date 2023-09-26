class Fila {
  constructor() {
    //manter controle
    this.count = 0;
    //
    this.lowestCount = 0;
    this.items = {};
  }
  /* *
   * Metodos em um fila:
   * enqueue(elem) -> adiciona new elem na queue
   * dequeue() -> remove  primeiro elem da queue
   * peek() -> metodo devolve o primeiro elemento da fila
   *  primeiro adicionado e removido
   * isEmpty() -> devolve true ou false nao contiver elem
   * size() -> devolve o numero de elem
   */

  // * inserção de elem fila:
  enqueue(elem) {
    this.items[this.count] = elem;
    this.count++;
  }
  dequeue() {
    if (this.isEmpty()) {
      return undefined;
    }
    const result = this.items[this.lowestCount];
    delete this.items[this.lowestCount];
    this.lowestCount++;
    return result;
  }
  isEmpty() {
    return this.size() === 0;
  }
  peek() {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.items[this.lowestCount];
  }
  size() {
    return this.count - this.lowestCount;
  }
  clear() {
    this.items = {};
    this.count = 0;
    this.lowestCount = 0;
  }
  toString() {
    if (this.isEmpty()) {
      return "";
    }
    let objString = `${this.items[this.lowestCount]}`;
    for (let i = this.lowestCount + 1; i < this.count; i++) {
      objString = `${objString},${this.items[i]}`;
    }
    return objString;
  }
}
const fila = new Fila();

module.exports = fila;
