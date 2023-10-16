/* 
  todo Metodo - indexOF lastIndexOf()
  https://ricardo-reis.medium.com/indexof-e-lastindexof-do-array-javascript-ac93f0848bd2
  Para encontrar a posição de um elemento em uma matriz, use o método indexOf().
   Este método retorna o índice da primeira ocorrência, 
  o elemento que você deseja encontrar, ou -1 se o elemento não for encontrado.

  Array.indexOf()
   - procura o elem
   - indexElem e o indice que vai fazer buscar no array
*/

let num = [10, 25, 30, 26, 51, 5, 51, 10];

console.log(num.indexOf(5))
console.log(num.indexOf(10))
console.log(num.indexOf(51))

// 
const dados = [
  { name: 'user 1', age: 20 },
  { name: 'user 2', age: 30 },
  { name: 'user 3', age: 25 },
]
console.log('buscando :', dados.indexOf({ name: 'user 2', age: 30 }))

function find(needle, haystack) {
  let result = []
  let id = haystack.indexOf(needle)

  while (id != -1) {
    result.push(id);
    id = haystack.indexOf(needle, id + 1)
  }
  return result;
}

console.log(find(10, num))