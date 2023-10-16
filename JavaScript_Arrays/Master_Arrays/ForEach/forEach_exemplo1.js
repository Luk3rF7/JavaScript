const { aprovado, a1 } = require('../dados_array/dados')
// Professor Leonardo :
// * o forEach só itera sobre valores:

aprovado.forEach(function (nome, indice) {
  console.log(`${indice + 1})  ${nome}`)
});
console.log(aprovado)
aprovado.forEach(nome => console.log('arrow function : ', nome))
const exibirAprovado = aprovado => console.log('dentro da função : =>', aprovado)
aprovado.forEach(exibirAprovado)

// porf Luiz miranda :

//for of 
for (let valor of a1) {
  console.log('for of ->')
  console.log(valor)
}
a1.forEach(num => console.log(num + '-> forEach'))
console.log('Dobro :')
a1.forEach(num => console.log(num * 2))
console.log('Simulando reducer :')
let total = 0
a1.forEach(num => {
  total += num
})
console.log(total)



