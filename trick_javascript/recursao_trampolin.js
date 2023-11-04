/* 
o trampolim e uma tecnica usada para otimizar funcao 
recursivas,permitindo que ela sejam  executada por um 
numero muito alto de vezes sem exceder o limite da pilha de 
chamada ,em js, especialmente em ambiente como nodejs,uma funcao
recursiva profunda pode causa um error "RangeError",maximun call stack
size exceded,o trampolim pode ajudar a evitar esse problema

a tecnica do trampolim envolve o uso de uma funcao de looping que continuamente 
chama função de retorno ate que não haja mais funçao p/ serem chamada
*/

function trampoline(fn) {
  return function (..args) {
    let result = fn(...args);

    while (typeof result === 'function') {
      result = result();
    }
    return result;
  }
}
function fatorial(n) {
  function aux(n, acc) {
    if (n <= 1) return acc;
    return () => aux(n - 1, n * acc)
  }
  return aux(n, 1)
}
const fatorialTrampolined = trampoline(fatorial)

console.log(fatorialTrampolined(5000))