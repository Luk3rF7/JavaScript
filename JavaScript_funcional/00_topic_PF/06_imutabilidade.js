// mutabilidade :
let salutation = 'hello world!';

salutation = 'bye';

// imutabilidade 
const person = {
  firstName: 'Developer',
};
console.log(person);

person.lastName = 'Frontend';

console.log(person);
// podemos utilizar freeze

const person2 = Object.freeze({
  firstName: 'developer',
})
console.log(person2);
person2.lastName = 'Backend';
console.log('Não adiciona lastName pois esta imutavel', person2);

// 

const numberFreeze = Object.freeze([0, 1, 2, 3, 4, 5, 6]);

console.log(numberFreeze);
// como manipular object.Freeze ?

function addElement(arr) {
  return Object.freeze([...arr, arr.length])
}

console.log(addElement((addElement(numberFreeze))));
