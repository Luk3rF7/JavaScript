/* 
lazy evaluation e um conceito de programação funcional onde a 
avaliacao de uma expressao e adiada ate que seu valor seja
realmente necessario ,isso pode ser util em varias situaçao 
como otimizacoes e trabalhando com estruturas de dados potencialmente 
infinitas

 todo Generatos
 a introducao de geradores no es6 deu aos desenvolvedores de js
 uma ferramente para criar funcao que pode ser pausada e retomada,permitindo a criacao de
 sequencia de dados sob demanda 

*/

function* infiniteSequencial() {
  let i = 0
  while (true) {
    yield i++
  }
}

const generator = infiniteSequencial();
console.log(generator.next().value)
console.log(generator.next().value)