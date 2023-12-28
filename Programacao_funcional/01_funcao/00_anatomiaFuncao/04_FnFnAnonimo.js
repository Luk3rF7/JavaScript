// ! Desafio 1 em arrow function

function subtrair(a, b) {
  return a - b
}
function mult(a, b) {
  return a * b
}
const calcular = a => b => fn => fn(a, b);

const r1 = calcular(10)(5)(subtrair)
const r2 = calcular(10)(5)(mult)
console.log(r1)
console.log(r2)