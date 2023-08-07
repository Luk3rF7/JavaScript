const minhaVariavel = "hello world !"
const numberJs = 11

/* 
comentarioa de multipla linhas
verificando tipo de dado:
*/

console.log(minhaVariavel)
console.log(numberJs)
console.log(typeof minhaVariavel)
console.log(typeof numberJs)

// condiçoes 
if (numberJs >= 10) {
  console.log('E maior que Dez')
} else {
  console.log("valor e menor que 10")
}

const idade = 51

if (idade < 18) {
  console.log('menor de 18 anos')
} else if (idade >= 18 && idade <= 50) {
  console.log('e um adulto')
} else {
  console.log('idoso')
}

//Switch case
const fruta = "maça"

switch (fruta) {
  case "Banana":
    console.log('isso e banana')
    break;
  case "maça":
    console.log('isso e maça')
    break;
  case "Pera":
    console.log('isso e uma pera')
    break;
  default:
    break;
}
// loops
for (let indice = 0; indice < 4; indice++) {
  console.log('valor de for é :' + indice)
}

//whilte
let index = 0

while (index < 5) {
  console.log('O valor dentro  while é :' + index)
  index++
}

// do while

let w = 0

do {
  console.log('O valor dentro Do while é :' + w)
  w++
} while (w < 5)

//func 
function cumprimentar(nome) {
  console.log("olá mundo! estou dentro de uma function" + `o nome passado na function é : ${nome}`)
}
cumprimentar('Lucas')

// variable global x local
let cor = "blue";
function mostrarCor() {
  let cor = "verde" // < - essa variavel não por causa que e uma local
  console.log('mesma nome da variavel let cor =', cor)
}

console.log('mesma nome da variavel let cor =', cor) //saida blue
mostrarCor() // saida verde

//hoisting = içamento:

testHoisting()

function testHoisting() {
  console.log('Estou abaixo da invação da funcao')
}

// arrow function 

const testeArrow = () => { console.log('Arrow function !!') }
testeArrow();