const num = [1, 2, 3, 4, 5, 6];

// funcional :
num.forEach(num => console.log('funcional ', num))

// programing funcional conseguimos passar 1 parametro de funcao expressional
const output = item => console.log('declarative', item);
num.forEach(output);
// outra maneira 
forEach(output, num);

// imperativo!
for (let ii = 0; ii < num.length; ii++) {
  console.log('Imperative', num[ii])
}

const value = true ? 'this value' : ' that value'