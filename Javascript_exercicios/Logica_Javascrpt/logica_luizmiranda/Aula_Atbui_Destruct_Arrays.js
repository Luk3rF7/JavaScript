//desestruturação 

const  numeros = [[1,2,3], [4,5,6], [7,8,9]]

console.log(numeros[1][2])

//complexo :
const [,[,,seis]] = numeros;
console.log(seis);

//jeito mas pratico
const [lista1,lista2,lista3] = numeros;
console.log(lista3[2])
