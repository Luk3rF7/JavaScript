/**
 *  ? Funçã map e aplicada num array de elemento 
 *  ? agente usa  tecnica de passa uma fn dentro de fn 
 *  !fn.map( fn )
 *  * [1,2,3].map(fn)
 */

const multPor2 = a => a * 2;
const firstLetter = letter => letter[0]

const n = [3, 2, 4, 5, 6, 3]
const nome = ['ana', 'bia', 'lia', 'gui', 'rafa', 'bete'];

const mult2 = n.map(multPor2);
const letterFirst = nome.map(firstLetter);

console.log(mult2)
console.log(letterFirst)