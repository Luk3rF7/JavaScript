// callback são funcao em parametros:

console.log('teste começou daqui 5s sua resposta!')
// guardo variavel a função :
const teste = function () {
  console.log('Test Funcionou ! em uma callback')
}

// passo numa função :
setTimeout(teste, 4000);
//
console.log('executando outro codigo')

// guardo variavel:
const loading = setInterval(function () {
  console.log('codigo em execução!')
}, 500);

// instancio dentro da função do cb
setTimeout(function () {
  clearInterval(loading);
  console.log('teste quase terminado')
}, 3000)
console.log('teste em Andamento...')


