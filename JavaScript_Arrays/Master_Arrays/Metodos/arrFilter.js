/* 
 todo metodo filter 
 https://ricardo-reis.medium.com/o-m%C3%A9todo-filter-do-array-javascript-7d5a8bcd4bd6

* Uma das tarefas mais comuns ao trabalhar com um array é criar um 
* novo array que contenha um subconjunto de elementos do array original.

*/

let cities = [
  { nome: 'Los angeles', population: 3792621 },
  { nome: 'New York', population: 8175133 },
  { nome: 'Chicago', population: 2695598 },
  { nome: 'Houston', population: 2099451 },
  { nome: 'Philadelphia', population: 1526006 }
]
// com loop 

let bigCity = []
// faço loop:
for (let i = 0; i < cities.length; i++) {
  // percorro checando população:
  if (cities[i].population > 3000000) {
    // adiciono novo array:
    bigCity.push(cities[i])
  }
}
console.log('população 1:', bigCity);

let bigCityFilter = cities.filter(city => city.population > 3000000)

console.log('filter : ', bigCityFilter);

// * Professor Leonardo - Filter :
const produtos = [
  { nome: 'Notebook', preco: 2499, fragil: true },
  { nome: 'iPad Pro', preco: 4199, fragil: true },
  { nome: 'Copo de Vidro', preco: 12.49, fragil: true },
  { nome: 'Copo de Plástico', preco: 18.99, fragil: false }
]

console.log(produtos.filter(function (p) {
  return false
}))

const caro = produto => produto.preco >= 500
const fragil = produto => produto.fragil

console.log(produtos.filter(caro).filter(fragil))


// * professor Luiz miranda:
// filter -> sempre retorna um array ,com a mesma quantidade de elementos


//retorna os numero maiores que 10
const numeros = [5.50, 80, 1, 2, 3, 4, 5, 8, 7, 11, 15, 22, 27];
// forma longa
function callbackFilter(valor) {
  if (valor > 10) {

    return true
  } else {
    return false
  }
}
//modo curta
const numerosFiltrado = numeros.filter(valor => valor > 50);
console.log(numerosFiltrado);
console.log("########### segundo exemplo #########################")

//retorne as pessoa que tem o nome com 5 letras ou mais
//retorna as pessoa com mais de 50 anos
//retorne as pessoa cujo nome termina com a

const pessoas = [
  { nome: 'Luiz', idade: 62 },
  { nome: 'Maria', idade: 23 },
  { nome: 'Eduardo', idade: 55 },
  { nome: 'Leticia', idade: 19 },
  { nome: 'Rosana', idade: 32 },
  { nome: 'Wallace', idade: 47 },
];
//fazendo filtração
const personNameBig = pessoas.filter(obj => obj.nome.length >= 5);
const personIdadeBig = pessoas.filter(person => person.idade >= 50);
const personEndA = pessoas.filter(person => person.nome.toLowerCase().endsWith('a'));

console.log(personNameBig)
console.log(personIdadeBig)
console.log(personEndA)





// estoque
const estoque = [
  { id: 1, preco: 10.0, quantidade: 1, stoque: 20 },
  { id: 2, preco: 15.0, quantidade: 0, stoque: 5 },
  { id: 1, preco: 30.0, quantidade: 1, stoque: 2 },
];

//  utilizando so filter
const semEstoque = estoque.filter(item =>
  item.estoque < item.quantidade // faz checagem com filter
)
console.log(semEstoque);  