// ! forma valores:

const numeros = [1000, 250.75, 42.99];
const numToFixed = num => num.toFixed(2);
const textMoeda = num => `R$ : ${num}`;

const valoresFormatados = numeros.map(numToFixed).map(textMoeda);
console.log(valoresFormatados);
