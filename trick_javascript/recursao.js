/* 
A recursao e uma tecnica em programação
onde uma função chamada a si mesmo p/ resolver um 
problema de maneira dividida em programação funcional a recursao e uma
ferramenta comum ja que muitas vezes evita-se o uso de loops
e mutação de estado
*/

function fatorial(n) {
  if (n <= 1) return 1
  return n * fatorial(n - 1);
}

console.log(fatorial(5))