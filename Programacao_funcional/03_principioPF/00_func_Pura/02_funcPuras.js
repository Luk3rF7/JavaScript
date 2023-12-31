let qtdDeExec = 0;

// Pura 
function soma(a, b) {
  // efeito colaterais observer 
  qtdDeExec++
  return a + b
}

console.log(qtdDeExec);
console.log(soma(36, 31))
console.log(soma(36, 31))
console.log(soma(36, 31))
console.log(soma(36, 31))
console.log(soma(36, 31))
console.log(qtdDeExec)