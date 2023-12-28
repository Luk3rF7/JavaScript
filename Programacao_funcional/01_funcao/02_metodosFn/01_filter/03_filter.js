//O método filter em JavaScript é uma função nativa que
// permite filtrar os elementos de um array de acordo com 
//critérios específicos.Por exemplo, você pode usar o método
// filter para filtrar um array de números para encontrar 
// a todos os números maiores que 5.

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const greaterThanFive = numbers.filter(number => number > 5);

console.log(greaterThanFive); // [6, 7, 8, 9, 10]
//Você também pode usar o método filter para
// filtrar um array de objetos.Por exemplo,
// você pode usar o método filter para encontrar
// a todos os objetos em um array que tenham uma 
// propriedade específica com um valor específico.

const users = [
  { name: 'John', age: 20 },
  { name: 'Mary', age: 25 },
  { name: 'Peter', age: 30 },
];
const adults = users.filter(user => user.age >= 18);

console.log(adults);