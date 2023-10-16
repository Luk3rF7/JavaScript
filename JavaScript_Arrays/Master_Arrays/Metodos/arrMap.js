/* 
todo Map method
https://ricardo-reis.medium.com/o-m%C3%A9todo-map-do-array-javascript-311235d651ed
 
 As vezes você precisa pegar um array, transformar seus elementos e incluir
 os resultados em um novo array.

 map e para transforma um em outro
 map recebe 3 valores
  - valor
  - number
  - index
*/
let circles = [10, 30, 50]
let areas = []
let area = 0
for (let i = 0; i < circles.length; i++) {
  area = Math.floor(Math.PI * circles[i] * circles[i])
  areas.push(area)
}
console.log('Sem map', areas);
// utilizando map

function circleAreas(radius) {
  return Math.floor(Math.PI * radius * radius);
}

let newAreas = circles.map(circleAreas);

console.log('com map:', newAreas);

// professor leonador -> map

const num = [1, 2, 3, 4, 5];
//for com proposito

let resultado = num.map(elem => elem * 2);
console.log('resultado dobro:', resultado);

// 
let soma10 = e => e + 10
let triplo = e => e * 3
let paraDinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace('.', ',')}`

//multi map utilizando função:

const mapResult = num.map(soma10).map(triplo).map(paraDinheiro)
console.log('map teste: ', mapResult)

//convertendo json com map:
const carrinho = [
  '{"Nome":"Borracha","preco":3.45}',
  '{"Nome":"Caderno","preco":13.90}',
  '{"Nome":"Kit de lapis","preco":41.22}',
  '{"Nome":"Caneta","preco":7.50}'
]

//convertendo p/ Array
// 1 crie metodo 

const paraObj = json => JSON.parse(json);
const apenasPrice = produto => produto.preco;
const arrPrice = carrinho.map(paraObj).map(apenasPrice).map(paraDinheiro)

console.log('Desafio :', arrPrice)

// professor luiz miranda -> map

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27]
const numDobrado = numeros.map(item => `Dobro desse valor é : ${item}`);
console.log(numDobrado)

// com obj
const personObj = [
  { name: 'Lucas', idade: 20 },
  { name: 'user 1', idade: 27 },
  { name: 'user 2', idade: 18 },
  { name: 'user 3', idade: 10 },
]
// map normal:
const nomesDoObjeto = personObj.map(props => props.name)
// map com função:
const idadeObj = e => e.idade
const obj2 = personObj.map(idadeObj);
// map normal:
const objId = personObj.map((obj, indice) => {
  const newObj = { ...obj };
  newObj.id = indice
  return newObj
})

console.log('map trouxe só nome:', nomesDoObjeto);
console.log('map trouxe só idade: ', obj2)
console.log('objeto com id: ', objId)