//com 1 params
function saudacao(nome) {
console.log(`Hello world! ${nome} boa tarde`);
return `Boa noite ${nome} to na variavel`
} 

saudacao('Lucas')
const variavel = saudacao('Luiz')
console.log(variavel)

//function com 2 params
function soma(x,y) {
    const resultado = x + y;
    return resultado
}

console.log(soma(2,5))
const resultado = soma(2,2)
console.log(resultado)

//função anonima
const raiz = function (n) {
     return n ** 0.5   
};

console.log(raiz(9))
console.log(raiz(16))
console.log(raiz(25))
//arrow function

const vezDois = (n1) => {
    return n1 * 2;
}

console.log(arrow(4))