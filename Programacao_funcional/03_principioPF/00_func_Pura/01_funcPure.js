function gerarNum(min, max) {
  const fator = max - min + 1
  return parseInt(Math.random() * fator) + min
}

console.log(gerarNum(5, 6))
console.log(gerarNum(50, 60))
console.log(gerarNum(1, 10))
console.log(gerarNum(1, 6))
console.log(gerarNum(15, 35))