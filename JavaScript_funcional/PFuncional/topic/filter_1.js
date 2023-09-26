
var numbers = [1, 4, 7, 10];

var isBiggerThanFour = function (value) {
  return value > 4;
};
/* utilizo filte para filtrar o valor da função */

var numbersBiggerThanFour = numbers.filter(isBiggerThanFour); // [7, 10]
/* Es6 */

const numbers = [1, 4, 7, 10];
const isBiggerThanFour = value => value > 4;

const numbersBiggerThanFour = numbers.filter(isBiggerThanFour); // [7, 10]