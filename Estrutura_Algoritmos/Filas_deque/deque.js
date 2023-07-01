class Deque {
  constructor() {
    this.count = 0;
    this.lowerCount = 0;
    this.items = {};
  }
  /*
   * metodos
   *addfront(elem) esse metodo adiciona um novo elemento na frente
   *addBack(elem) esse metodo adiciona um novo elemento no fim do deck
   *removeFront() esse metodo remove o primeiro elemento do deck
   *removeBack() esse metodo remove o ultimo elemento do deck
   *peekFront() devolve o primeiro elemento do deque
   *peekBack() devolve o ultimo elemento do deque
   */
  addFront(element) {
    if (this.isEmpty()) {
      // {1}
      this.addBack(element);
    } else if (this.lowestCount > 0) {
      // {2}
      this.lowestCount--;
      this.items[this.lowestCount] = element;
    } else {
      for (let i = this.count; i > 0; i--) {
        // {3}
        this.items[i] = this.items[i - 1];
      }
      this.count++;
      this.lowestCount = 0;
      this.items[0] = element; // {4}
    }
  }
  addBack(element){}

  removeFront(){}
  removeBack(){}
  peekFront(){}
  peekBack(){}
  
}

const deck = new Deque()
module.exports = deck