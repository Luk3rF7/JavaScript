/**
 * ! Diz-se que uma linguagem de programação possui
 * * funçoes de primeira classe quando função nessa
 * *linguagem são tratadas como qualquer outra variavel
 */

const x = 3;

const y = function (txt) {
  return `Esse e o texto: ${txt}`
}

console.log(x)
console.log(y('olá'))