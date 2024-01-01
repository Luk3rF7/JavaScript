// # Passamos valor aqui :
function dec2Bin(decNumber) {
  var restStack = [],
    rest,
    binaryString = ''
  // ! # Part add
  // Aqui ele vai fazer loop enqto decNum for maior que 0 :
  while (decNumber > 0) {
    // aqui ele vai pega rest 
    rest = Math.floor(decNumber % 2)
    // aqui ele vai adicionar no array resto
    restStack.push(rest)
    // aquele ele vai dividir decNumber e reiniciar loop
    decNumber = Math.floor(decNumber / 2)
  }
  // ! # 2 Conversão do array em string
  while (restStack.length > 0) {
    // com metodo pop ele retorna ultimo item
    binaryString += restStack.pop().toString()
    // fazendo inversão de traz para frente
  }

  return binaryString
}