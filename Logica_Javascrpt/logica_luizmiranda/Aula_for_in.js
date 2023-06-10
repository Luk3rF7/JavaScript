//for in le os indice ou chaves(Objetos)
const frutas = ['Maçã','Pera','Uva']

//a utilização do for in e interesante em objetos:

for(let i in frutas){
console.log(frutas[indice])
}
//utilizando com objetos
const pessoa = {
    nome: 'Paulo',
    sobrenome: 'Otavio',
    idade: 20,
}
//maneira de acessar 
console.log(pessoa.nome)
console.log(pessoa['nome'])

//for com objetos
for (let chaves in pessoa){
    console.log(chaves)
}




//for repetição e contador
/* 
for(let i = 0;i < frutas.length;i++){
    console.log(frutas)
}
*/