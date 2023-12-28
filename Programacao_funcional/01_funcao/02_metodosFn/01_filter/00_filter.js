/**
 * ! Filter utilizando quando queremos filtrar
 * ! algo 
 */

const n = [1, 2, 3, 4, 5, 6];

const divPar = num => num % 2 == 0;
const divImpar = num => num % 2 == 1;
const numMenor4 = num => num < 4;

const par = n.filter(divPar)
const impar = n.filter(divImpar)
const valorMenorQue4 = n.filter(numMenor4)

console.log(par);
console.log(impar);
console.log(valorMenorQue4);