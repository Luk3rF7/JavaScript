// função normal
function add(x, y) {
  return x + y
}

// first class
const addFirstClass = function (x, y) {
  return x + y
}

console.log(add(10, 20))
console.log(addFirstClass(40, 20))

/* 
!  document.addEventListener('click', function (e) {});
*/

// função normal

function greet(saluation, firstName) {
  return `${saluation},${firstName}`
}

// first-class
const greetFirstHigh = function (saluation) {
  return function (firstName) {
    return `${saluation} - ${firstName}`
  }
}

// com first classe conseguimos fazer :

const howdy = greetFirstHigh('Seja bem-vindo!');
const hello = greetFirstHigh('Hello');

// assim conseguimos reaproveitar o codigo !
console.log(howdy('Lucas'));
console.log(howdy('developer'));
console.log(hello('developer'));
