class fila {
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
}
