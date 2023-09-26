const nome = 'Lucas'
console.log(nome[0])
//array 
const aluno = ['Luiz', 'maria', 'joão'];

console.log(aluno)
//instacioa de array
console.log(typeof aluno)// object
console.log(aluno instanceof Array); // true e array /false não e array

//fatiar slice
console.log(aluno.slice(0,3))

//utilizando pop() pode ser guardado numa variavel
const removido = aluno.pop(); //shift remove o primeiro elemento
console.log(removido)

//adiciona no começo
aluno.unshift('Roberto')
aluno.unshift('Roberta')

//usando push adicionar no fim
aluno.push('Otavio')
//tarz quantidade dentro da array no fim
aluno[aluno.length] ='Luiza'
aluno[aluno.length] ='Fabio'
aluno[aluno.length] ='Lucas'
console.log(aluno.length)
// adicionando array alterar[0] / adicionar[3]
aluno[0]= 'Eduardo' 
aluno[3] = 'Luiza'
//trazer algo do array por index
console.log(aluno[0]); 
