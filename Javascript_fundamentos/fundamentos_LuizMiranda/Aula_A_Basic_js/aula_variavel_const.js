/* 
1 - não podemos criar variaveis com palavras reservada - chaves;
2 -  variaveis precisa ter nome significativos;
3 - 
//evita fazer:

const n = campoBaseDados;

//mellhor jeito :

const nomeCliente = campoDados;

4 - não podemos iniciar const com numero 
const 1nome;

5- não pode conter espaço ou traço
const nome-cliente = nomeCliente;

6 - utilize camelCase: 
exemplo:
const nomeCompletoDoClient = 'pessoaClient';
7 - São case-sensitive e faz diferença

const nomeCliente =  'person1'
const nomecliente = 'person2'
*/

const primeiroNumero = 5;
const segundoNumero = 10;

const resultado = primeiroNumero * segundoNumero;
const resultadoDuplicado = resultado * 2;

console.log(resultado)
console.log(resultadoDuplicado)