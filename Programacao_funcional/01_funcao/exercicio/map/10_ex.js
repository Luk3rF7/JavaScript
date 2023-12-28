const alunos = [
  { nome: 'Carlos', notas: [8, 7, 9] },
  { nome: 'Ana', notas: [9, 8, 10] }
];
const medias = alunos.map(aluno => ({
  nome: aluno.nome,
  media: aluno.notas
    .reduce((acc, nota) => acc + nota, 0) / aluno.notas.length
}));
console.log(medias);


