/**
 *  Podemos iniciar com new Array()
 *  podemos definir tamanho do array 
 *  passando valor no parametro
 *  o parametro pode receber os valores tambem:
 */

const dayWeek = new Array(
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday'
);

const removidoUltimo = dayWeek.pop();

console.log(dayWeek);
console.log(dayWeek.length);
console.log(removidoUltimo)