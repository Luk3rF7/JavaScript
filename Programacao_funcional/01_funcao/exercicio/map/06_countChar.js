// contador de caracteres 
const palavras = ['cachorro', 'gato', 'elefante'];
const letterCount = letter => letter.length;

const countLetter = palavras.map(letterCount);
console.log(countLetter);