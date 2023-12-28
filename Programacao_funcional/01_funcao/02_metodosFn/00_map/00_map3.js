const num = [1, 2, 3, 4, 5];
const dobro = n => n * 2;
console.log(num.map(dobro));


const nome = ['ana', 'bia', 'lia', 'gui', 'rafa', 'bete'];

const letterFirst = letter => letter[0].toUpperCase();

const result = nome.map(letterFirst);

console.log(result);
