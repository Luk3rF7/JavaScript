let stringInvert = ''
let frase = 'rafael,Roma,rato,amog'
let arr = frase.split("");

while (arr.length > 0) {
  // com metodo pop ele retorna ultimo item
  stringInvert += arr.pop().toString()
  // fazendo inversão de traz para frente
}

console.log(stringInvert)

