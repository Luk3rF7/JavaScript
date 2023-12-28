/* 
 ! A Função map a gente utiliza quando queremos 
 ! Transforma um Array :
*/
const num = [1, 2, 3];
const dobro = num.map(num => num * 2);
console.log(`
  Array : ${num}
  Array depóis do map ${dobro}
`);

const alunoList = [
  { name: 'Jake', nota: 6.8 },
  { name: 'Susan', nota: 8.6 },
  { name: 'Emma', nota: 9.4 },
  { name: 'Peter', nota: 9.1 },
];

const aprovados = alunoList.map(alunos => {
  if (alunos.nota >= 7) {
    return alunos.name + ': aluno aprovado'
  } else {
    return alunos.name + ': aluno reprovado'
  }
});


