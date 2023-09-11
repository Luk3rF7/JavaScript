// pure function 

const sum = (a, b) => a + b

// sempre me retorna mesmo resultado
// nao tem efeito colateral
console.log(sum(2, 1))
sum(3, 1)

// oque e efeito colateral
let total = 0
const sum2 = (x, y) => {
  total = x + y
}
console.log(total); // zero
// total sera soma do x + y assim gerando
//side effect
sum2(1, 2); 