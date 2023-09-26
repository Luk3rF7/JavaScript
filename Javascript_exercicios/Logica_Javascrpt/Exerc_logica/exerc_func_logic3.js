/* 
escreva um função que receba um numero e
retorne o seguinte:
numero divisivel por 3 = Fizz
numero é divisivel por 5 = Buzz
numero é divisivel por 3 e 5 = retorna o proprio numero
checar se o numero e realmente um numero
use funcao com numero de a a 100 
*/
function FizzBuzz(numero){
if( typeof numero !== 'number') return numero;
if(numero % 3 && numero % 5 === 0) return 'FizzBuzz'
if(numero % 3 === 0) return 'Fizz';
if(numero % 5 === 0) return 'Buzz';
return numero
}
for(let i = 0; i <= 100; i++){

    console.log(i, FizzBuzz(i));
}


