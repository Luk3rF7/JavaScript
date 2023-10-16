/* 
  todo Reduce
* https://ricardo-reis.medium.com/os-m%C3%A9todos-reduce-e-reduceright-5d34b1efa4a8
  você desejar calcular o total dos elementos do array.

Normalmente você usa o loop for para iterar sobre os elementos 
e adicioná-los conforme mostrado no exemplo a seguir:
*/

let numerosArr = [1, 2, 3]
let sum = 0
for (let i = 0; i < numerosArr.length; i++) {
  sum += numerosArr[i]
}

console.log('Reduzindo array: ', sum);
//com reduce
let totalReduce = numerosArr.reduce((acc, curr) => {
  return acc + curr
}, 0)

console.log('reduce:', totalReduce);
// shoppcart

let shoppCart = [
  { product: 'phone', qtd: 1, price: 299 },
  { product: 'Screen Protected', qtd: 1, price: 9.99 },
  { product: 'memory card', qtd: 2, price: 29.9 }
]

let valorTotal = shoppCart.reduce((acc, curr) => {
  return acc + curr.qtd * curr.price
}, 0)
console.log('valor total do shopp cart :', valorTotal)
// Reduce concatenar dados ou reduzir
const produt = [
  { id: 1, preco: 10.00, quantidade: 1 },
  { id: 2, preco: 15.00, quantidade: 2 },
  { id: 1, preco: 30.00, quantidade: 1 }
]
//utilizando reduce: posso guarda numa variavel

const carrinhoSum = produt.reduce(
  (soma, item) => // 1 params recebe soma e segundo item
    item.preco + soma, 0)
console.log(carrinhoSum)

// utilizando map + reduce:

const totalCarrinho = produt // guardo na varivel func red e map
  .map(prodt => prodt.preco * prodt.quantidade) // vou pega preço vezes quantidade
  .reduce(
    (soma, subtotal) => // recebe 2 params soma e subtotal
      subtotal + soma, 0
  )
console.log(totalCarrinho)

// * professor leonardo 
const alunos = [
  { nome: 'João', nota: 7.3, bolsista: false },
  { nome: 'Maria', nota: 9.2, bolsista: true },
  { nome: 'Pedro', nota: 9.8, bolsista: false },
  { nome: 'Ana', nota: 8.7, bolsista: true }
]

console.log(alunos.map(a => a.nota))
const resultado = alunos.map(a => a.nota).reduce(function (acumulador, atual) {
  console.log(acumulador, atual)
  return acumulador + atual
}, 0)

console.log(resultado)
const alunosArr = [
  { nome: 'João', nota: 7.3, bolsista: false },
  { nome: 'Maria', nota: 9.2, bolsista: true },
  { nome: 'Pedro', nota: 9.8, bolsista: false },
  { nome: 'Ana', nota: 8.7, bolsista: true }
]

// Desafio 1: Todos os alunos são bolsista?
const todosBolsistas = (resultado, bolsista) => resultado && bolsista
console.log(alunosArr.map(a => a.bolsista).reduce(todosBolsistas))

// Desafio 2: Algum aluno é bolsista?
const algumBolsista = (resultado, bolsista) => resultado || bolsista
console.log(alunosArr.map(a => a.bolsista).reduce(algumBolsista))

// * professor Luiz miranda:
//reduz 
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27]
const total = numeros.reduce(function (acumulador, valor, indice, array) {

  //   acumulador += valor;
  // achar par/impar   if(valor % 2 === 0) acumulador.push(valor)
  acumulador.push(valor * 2);
  return acumulador;
}, [])

console.log(total)



const pessoas = [
  { nome: 'Luiz', idade: 62 },
  { nome: 'Maria', idade: 23 },
  { nome: 'Eduardo', idade: 55 },
  { nome: 'Leticia', idade: 19 },
  { nome: 'Rosana', idade: 64 },
  { nome: 'Wallace', idade: 47 },
];

const maisVelha = pessoas.reduce(function (acumulador, valor) {
  if (acumulador.idade > valor.idade) return acumulador;
  return valor;
});
console.log(maisVelha)