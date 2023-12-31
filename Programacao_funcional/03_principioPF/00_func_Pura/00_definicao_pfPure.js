/**
 * ! Função pura :
 * * função em que o valor de retorno é determinado
 * * apenas  por seus valores de entrada sem
 * * efeito colaterais observáveis :
 */

const PI = 3.14;
// isso e função inpura por causa que 
// valor de pi pode ser incerto 
// e causa efeito colateral
//  ! funcao Inpura :
function areaCirc(raio) {
  // quando valor e estavel
  return raio * raio * PI
}
// ! função Pura 
function areaCircPura(raio, pi) {
  return raio * raio * pi
}
console.log()