/* 
todo stack - Pilha 
*Introdução à estrutura de dados em pilha (stack data structure)
 * Uma stack (pilha) é uma estrutura de dados que contém uma lista de elementos.
 * Uma stack funciona com base no princípio LIFO (Last In, First Out),
 *  que significa “último a entrar, primeiro a sair”, ou seja, 
* o elemento adicionado mais recente é o primeiro a ser removido. 
*/

let stack = []
//adiciona fila
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
stack.push(5);
//remover final da fila
stack.pop()

function reverse(str) {
  let stack = []

  //  adicionar
  for (let i = 0; i < str.length; i++) {
    stack.push(str[i])
  }
  // remover final da fila
  let reverseStr = ''
  while (stack.length > 0) {
    reverseStr += stack.pop()
  }
  return reverseStr
}

