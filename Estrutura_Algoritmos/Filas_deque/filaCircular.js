const fila = require("./fila");

function hotPotato(elemList, num) {
  const elimitatedList = [];
  for (let i = 0; i < elemList.length; i++) {
    fila.enqueue(elemList[i]);
  }
  while (fila.size() > 1) {
    for (let i = 0; i < num; i++) {
      fila.enqueue(fila.dequeue());
    }
    elimitatedList.push(fila.dequeue());
  }
  return {
    eliminated: elimitatedList,
    winner: fila.dequeue(),
  };
}

const names = ["John", "Jack", "Camila", "Ingrid", "Carl"];
const result = hotPotato(names, 10);
result.eliminated.forEach((name) => {
  console.log(`${name} was eliminated from the Hot Potato game.`);
});
console.log(`The winner is: ${result.winner}`);
