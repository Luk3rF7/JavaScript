/* 
  function high Order

  São função que chama outra função
  podemos criar abstrações
*/

const calculate = function (fn, x, y) {
  return fn(x, y);
};
const sum = function (x, y) {
  return x + y;
};

const mult = function (x, y) {
  return x * y;
};

console.log(calculate(sum, 2, 5)); // 7
console.log(calculate(mult, 2, 5)); // 10
/*
 Es6 
 
const sum = (x, y) => x + y;
const mult = (x, y) => x * y;

calculate(sum, 2, 5); // 7
calculate(mult, 2, 5); // 10
 */
