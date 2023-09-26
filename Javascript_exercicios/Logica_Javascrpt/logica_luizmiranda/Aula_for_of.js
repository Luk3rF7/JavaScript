//excelente par aobjeto literal (String ou Array ou)
/* 
for classico - geralmente com iteraveis (array ou string)
for in - retorna indico ou chave (string,array ou objeto)
for of - retorn o valor em si (iteraveis,arrays ou srting)
*/
//FOR OF vetor/string/array
console.log('For of - Valor | objeto não e muito eficaz')
console.log('------------------------------')
const nome = ['Matheus','Marcelo','Maria'];

for(let valor of nome){
    console.log(valor)
}



console.log('------------------------------')
console.log('for in - indice | pega valor e indice')
console.log('------------------------------')
for(let i in nome) {
    console.log(nome[i]);
}

console.log('------------------------------')
 console.log('for')
 console.log('------------------------------')
for(let i = 0;i < nome.length;i++) {
    console.log(nome[i]);
} 

console.log('------------------------------')
console.log('forEach')
console.log('------------------------------')
nome.forEach(function(valor,indice,array){
    console.log(valor,indice,array)
})