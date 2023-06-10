/* 
Primitivos (imutaveis) -  string,number,boolean,undefined,null
*/
let a = "A";
let b = a;
let c = [...b] //metodo spread 
console.log(a,b);

/* Referencia (mutavel) - array , object,function  */

let A = [1,2,3];
let B = A;
console.log(A , B)
A.push(4)
console.log(A , B)
A.pop();
console.log(A , B)

//objetos
const objetoA = {
    nome:'Lucas',
    sobrenome:"Felipe",
}

const objetoB = objetoA
const objetoC = {...objetoB}
console.log(objetoA, objetoB, objetoC)