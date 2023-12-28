/**
 * ! Desafio 1 :
 * * Criar função calcular(n)(n)(fn)
 * * - primeiro params seja numero
 * * - segundo params seja numero
 * *  - terceiro params seja funcao vai ser
 * *    responsavel por calcular params 1 com 2
 *  ================================================== 
 * ? Mini Desafio :
 *  * somar(3)(4)(5);
 */

// ? mini Desafio 

function somar(n) {
  return function (a) {
    return function (b) {
      return n + a + b
    }
  }
}

console.log(somar(3)(4)(5));


function subtrair(a, b) {
  return a - b
}
function mult(a, b) {
  return a * b
}
function calcular(a) {
  return function (b) {
    return function (fn) {
      return fn(a, b)
    }
  }
}

const r1 = calcular(10)(5)(subtrair)
const r2 = calcular(10)(5)(mult)
console.log(r1)
console.log(r2)
