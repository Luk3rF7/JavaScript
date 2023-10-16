let atividade = [
  ["Trabalho", 9],
  ["Comer", 5],
  ["Comunicar", 4],
  ["Jogar", 2],
  ["dormi", 7],
];
// console.table(atividade);

// * Adicionar:
// adiciona no final :
atividade.push(['assistir', 5]);

// adiciona no meio :
atividade.splice(4, 0, ['Jogado no meio', 5])
console.table(atividade);

//calcula porcentagem de horas gasta:

atividade.forEach((hour) => {
  let porcentagem = ((hour[1] / 24) * 100).toFixed();

  hour[2] = porcentagem + '%'
})

console.table(atividade)

// deletar:
//remove final:
atividade.pop()
//remove qualquer posicao
atividade.slice()
//removendo com forEach:
atividade.concat((item) => {
  atividade.pop(2)
})