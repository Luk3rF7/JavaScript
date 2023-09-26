// filter -> sempre retorna um array ,com a mesma quantidade de elementos


//retorna os numero maiores que 10
const numeros = [ 5.50,80,1,2,3,4,5,8,7,11,15,22,27];
// forma longa
function callbackFilter(valor){
        if(valor > 10){
            
            return true
        }else {
            return false
        }
}
//modo curta
const numerosFiltrado  = numeros.filter(valor => valor > 50);
console.log(numerosFiltrado);
console.log("########### segundo exemplo #########################")

//retorne as pessoa que tem o nome com 5 letras ou mais
//retorna as pessoa com mais de 50 anos
//retorne as pessoa cujo nome termina com a

const pessoas =[
    {nome: 'Luiz',idade:62},
    {nome: 'Maria',idade:23},
    {nome: 'Eduardo',idade:55},
    {nome: 'Leticia',idade:19},
    {nome: 'Rosana',idade:32},
    {nome: 'Wallace',idade:47},
];
//fazendo filtração
const personNameBig = pessoas.filter(obj => obj.nome.length >= 5);
const personIdadeBig = pessoas.filter(person =>person.idade >= 50);
const personEndA = pessoas.filter(person => person.nome.toLowerCase().endsWith('a'));

console.log(personNameBig)
console.log(personIdadeBig)
console.log(personEndA)



