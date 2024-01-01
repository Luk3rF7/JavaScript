function Stack() {
  const items = []

  this.push = (element) => {
    // vai adicionar novo item a pilha :
    items.push(element)
  };

  this.pop = () => {
    // vai remover elemeto do topo :
    return items.pop();
  };

  this.topo = function () {
    return items[items.length - 1]
  };

  this.isEmpty = () => {
    // check se esta vazio  a pilha
    return items.length === 0
  };
  this.clear = () => {
    // limpa pilha
    return items = [];
  };

  this.size = () => {
    // vai informa tamanho da pilha
    return items.length
  };

  this.print = () => {
    // vai nos mostrar oque tem na pilha
    return items.toString()
  };

}

module.exports = {
  Stack
}
const pilha = new Stack();
console.log(pilha.isEmpty())

pilha.push(1)
pilha.push(1)
pilha.push(1)
pilha.push(1)
pilha.push(1)
pilha.push(1)
pilha.push(5)

console.log(pilha.topo())
console.log(pilha.isEmpty())
console.log(pilha.size())
console.log(pilha.print())
