/* currying - função com vario params */

/* func */
var add = function (x, y) {
  return x + y;
};

add(1, 2) // 3

/* utilizando currying */

var add = function (x) {
  return function (y) {
    return x + y;
  };
};

add(1)(2); // 3
/* reutilizar  */
var addFive = add(5);
var addTen = add(10);

addFive(3); // 8
addFive(1); // 6

addTen(1); // 11
addTen(10); //20

/* simples hello world */

var greeting = function (greet) {
  return function (name) {
    return greet + ' ' + name;
  };
};

var hello = greeting('Hello');
hello('World'); // Hello World
hello('Matheus'); // Hello Matheus

/* es6 */

const greeting = greet => name => greet + ' ' + name;
const hello = greeting('Hello');

hello('World'); // Hello World
hello('Matheus'); // Hello Matheus