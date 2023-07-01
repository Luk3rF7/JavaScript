/*
 *estrutura de dados da lista
 * adição de elementos em um lista ligada
 *remoção de elemento de um lista ligada
 *como usar a classe LinkedList
 *listas duplamente ligada
 *lista ligadas circulares
 *lista ligadas ordenadas
 * implementacao de uma pilha com lista ligadas
 */

//  * criando linkedList

import { defaultEquals } from "../util";
import { Node } from "./models/linked-list-models"; // {1}
export default class LinkedList {
  constructor(equalsFn = defaultEquals) {
    this.count = 0; // {2}
    this.head = undefined; // {3}
    this.equalsFn = equalsFn; // {4}
  }
}
/* 
• push(element): esse método adiciona um novo elemento no final da lista.
• insert(element, position): esse método insere um novo elemento em uma
posição específica da lista.
• getElementAt(index): esse método devolve o elemento que está em uma
posição específica da lista. Se o elemento não estiver na lista, undefined
será devolvido.
• remove(element): esse método remove um elemento da lista.
• indexOf(element): esse método devolve o índice do elemento na lista. Se
o elemento não estiver na lista, -1 será devolvido.
• removeAt(position): esse método remove um item de uma posição
específica da lista.
• isEmpty(): esse método devolve true se a lista ligada não contiver nenhum
elemento, e false se o tamanho da lista ligada for maior que 0.
• size(): esse método devolve o número de elementos contidos na lista
ligada. É semelhante à propriedade length do array.
• toString(): esse método devolve uma representação em string da lista
ligada. Como a lista usa uma classe Node como elemento, devemos
sobrescrever o método toString default herdado da classe Object de
JavaScript a fim de exibir somente os valores dos elementos.

*/

//adicionando no final o elem
/* 
push(element) {
   const node = new Node(element); // {1}
let current; // {2}
if (this.head == null) { // {3}
this.head = node;
} else {
current = this.head; // {4}
while (current.next != null) { // {5} obtém o último item
current = current.next;
}
 e atribui o novo elemento a next para criar a ligação
current.next = node; // {6}
}
this.count++; // {7}
}
*/
