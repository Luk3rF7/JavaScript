/*
curring e uma tecnica em programação funcional onde uma
funcao que aceita multiplo argumentos e transformado em uma serie
de função  argumento,em outra palavras em vez de chamar
uma funcao com todo argumento de uma vez voce chama com o primeiro
argumento,oque retorna uma nova funcao que voce chama
com o segundo arguento e assim diante
*/

//funcao que aplice um descontro
const applyDiscount = discount => price => price * (1 - discount)

//criando funcao de desconto especifico usando curring
const tenPercentOff = applyDiscount(0.10);
const twentyPercentOff = applyDiscount(0.20);

// exemplo de uso 
const productPrice = 100;

console.log(tenPercentOff(productPrice));
console.log(twentyPercentOff(productPrice));

//funcao curry generica -> pode transforma sua funcao
// numa versao curried dela 

const curry = fn =>
  function next(...args) {
    return args.length >= fn.length ?
      fn(...args) :
      (...newArgs) => next(...args, ...newArgs)
  };

// funcao de exemplo p/ usar com funcao curry

const multiply = (x, y, z) => x * y * z
const curriedMultiply = curry(multiply)
console.log(curriedMultiply(2)(3)(4))