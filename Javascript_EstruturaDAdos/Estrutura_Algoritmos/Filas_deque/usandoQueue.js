const fila = require("./fila");

console.log(fila.isEmpty());
fila.enqueue("Lucas");
fila.enqueue("Felipe");
console.log(fila.toString());
console.log(fila);
fila.enqueue("john");
console.log(fila.size());
fila.dequeue("lucas");
console.log(fila);
fila.enqueue("Lucas");
console.log(fila);
