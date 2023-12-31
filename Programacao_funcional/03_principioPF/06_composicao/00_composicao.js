function composicao(...fns) {
  return function (valor) {
    return fns.reduce((acc, fn) => {
      return fn(acc)
    }, valor);
  }
}

function gritar(txt) {
  return txt.toUpperCase();
}
function enfatizar(txt) {
  return `${txt}!!!`
}
function modoLento(txt) {
  return txt.split('').join(' ')
}

const result = composicao(
  gritar,
  enfatizar,
  modoLento
)('PARA');
// Podemos com composicao utilizar da seguinte maneira 

const exagerado = composicao(
  gritar,
  enfatizar,
  modoLento
);

// passa para um variavel 
const resultado = exagerado('Muito alto')
console.log(result)
console.log(resultado)