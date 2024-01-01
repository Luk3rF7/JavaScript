function Queue() {
  let items = [];

  this.enqueue = function (elem) {
    // adicionar item
    return items.push(elem)
  };

  this.dequeue = function () {
    // remove primeito item
    return items.shift();
  };

  this.front = function () {
    // retorna o primeiro elemento da fila
    return items[0];
  };

  this.isEmpty = function () {
    // verifica se fila esta vazia 
    return items.length === 0;
  };
  this.size = function () {

  };

  this.print = function () {
    return console.log(items.toString());
  }
}

const fila = new Queue();

console.log(fila.isEmpty())
fila.enqueue(1);
fila.enqueue(2);
fila.enqueue(3);
fila.enqueue(4);
fila.enqueue(5);

fila.print()
console.log(fila.isEmpty())