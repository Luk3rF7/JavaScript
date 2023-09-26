const nomes  = ['Eduardo','Maria','Joana'];
//strings,objetos,funçoes,numeros
// const nomes = new Array('Eduardo','Felipe','Josefa');
/* nomes[2] ='João';
delete nomes[2];
console.log(nomes);
 */
//valor por referencia
const novo = nomes.slice(1,-1);
novo.pop();
console.log(nomes);
console.log(novo);
console.log(nomes.length) 
console.log(nomes.pop('Eduardo')) 
console.log(nomes.shift()); 
console.log(nomes.unshift()); 
console.log(nomes.push('Eduardo jr'));

//jogando array

const nome1 = 'Lucas Felipe candido'
const nome2 = nome1.split(' ')
console.log(nome2)