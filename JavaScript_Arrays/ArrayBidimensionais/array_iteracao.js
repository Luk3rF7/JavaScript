let atividade = [
  ["Trabalho", 9],
  ["Comer", 5],
  ["Comunicar", 4],
  ["Jogar", 2],
  ["dormi", 7],
];

// iteração multi array:

for (let i = 0; i < atividade.length; i++) {
  // primeiro loop iterage sobre elemento do array:
  let armazenaAtividade = atividade[i].length
  //inicia outro loop:
  for (let j = 0; j < armazenaAtividade; j++) {
    console.log('[' + i + ',' + j + '] = ' + atividade[i][j])
  }
}
// utilizando forEach:

atividade.forEach((atividade) => {
  console.log('Array item :', atividade)
  atividade.forEach((item) => {
    console.log('item dentro do array : ', item)
  })
})