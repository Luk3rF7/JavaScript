Array.prototype.meuReduce = function (fn, inicial) {
  let acc = inicial
  for (let i = 0; i < this.length; i++) {
    if (!acc && i === 0) {
      acc = this[i]
    } else {
      acc = fn(acc, this[i], i, this)
    }
  }
  return acc
}

const totalGeral2 = carrinho
  .map(getTotal)
  .meuReduce(somar)

console.log(totalGeral2)