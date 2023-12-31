/**
 *  ! Funções que operam em outra funções 
 * * Tomando-as como argumento ou retornando-as
 * * São chamada de higher-order functions 
 */

function executar(fn, ...value) {
  return function (textInit) {
    return `${textInit}${fn(...value)}!`
  }
}

function somar(a, b, c) {
  return a + b + c
}

function mult(a, b) {
  return a * b
}

const r1 = executar(somar, 4, 5, 6)('O resultado da soma inicial é: ');
const r2 = executar(mult, 30, 50)('O resultado da multiplicação é:');

console.log(r1)
console.log(r2)