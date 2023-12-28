// format name com map:


const pessoas = [{ nome: 'João', sobrenome: 'Silva' }, { nome: 'Maria', sobrenome: 'Souza' }];
const fullName = person => person.nome + ' ' + person.sobrenome;
const nomesCompletos = pessoas.map(fullName);
console.log(nomesCompletos);
