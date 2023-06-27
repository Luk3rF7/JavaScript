//enqueue adicionando um elemento ao final da fila
//dequeue remove o primeiro elemento da fila
//queue fila

//modelagem
class Queue {
  constructor() {
    this.data = [];
  }

  enqueue(alguem) {
    this.data.push(alguem);
    console.log(`Entrou na fila ${alguem}`);
  }

  dequeue() {
    const item = this.data.shift();
    console.log(`saiu ${item}`);
  }
}

//2 utilizando
const fila = new Queue();
fila.enqueue("dev1");
fila.enqueue("dev2");
fila.enqueue("dev2");
fila.enqueue("dev4");
fila.enqueue("dev4");
fila.enqueue("dev5");
fila.dequeue();
