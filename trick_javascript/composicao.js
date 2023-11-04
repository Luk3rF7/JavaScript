/* 
composiçao e um principio fundamental da programação
funcional em essencia trata-se de pegar duas ou mais
funcao e combina-las  p/ forma uma nova funcao em js
e nodejs a composicao pode ser usada para criar pipelines
de funcao onde a saida de uma funcao  se torna a entrada da proxima 
*/

//suponha que temos essa duas funcap
function double(x) {
  return x * 2
}
function increment(x) {
  return x + 1
}

// e criamos uma simples funcao de composicao 
function compose(f, g) {
  return function (x) {
    return f(g(x))
  }
}

//conseguiremos o seguinte output

const doubleAndIncrement = compose(increment, double)
console.log(doubleAndIncrement((5)))

//exemplo mais abragente de composicao 
function composeMultiple(...fns) {
  return fns.reduce((f, g) => (...args) => f(g(...args)))
}

const composedFunction = composeMultiple(increment, double, Math.sqrt)
console.log(composedFunction(4))