Array.prototype.meuFilter = function (fn) {
  const novoArray = []
  for (let i = 0; i < this.length; i++) {
    if (fn(this[i], i, this)) {
      novoArray.push(this[i])
    }
  }
  return novoArray
}

const nomeItensValido2 = carrinho
  .meuFilter(qtdeMaiorQueZero)
  .map(getNome)

console.log(nomeItensValido2)