//dobra os valores
const numeros =[5,50,80,1,2,3,5,8,7,11,15,22,27]

const numeroDobro = numeros.map(valor =>valor * 2)  

console.log(numeroDobro);

const pessoas =[
    {nome: 'Luiz',idade:62},
    {nome: 'Maria',idade:23},
    {nome: 'Eduardo',idade:55},
    {nome: 'Leticia',idade:19},
    {nome: 'Rosana',idade:32},
    {nome: 'Wallace',idade:47},
];

const person = pessoas.map(obj => obj.nome.toString() )
console.log(`só nome da pessoas ${person}`)

const personIdade = pessoas.map(obj => obj.idade)

console.log(` idade das pessoas ${personIdade}`)
console.log('feito pelo instrutor!')

const idades = pessoas.map(obj=> ({idade: obj.idade}) )
 console.log(idades)

 const comId = pessoas.map(function(obj,indice) {
  const newObj ={...obj};
  newObj.id = indice;
    return newObj;
 })
 console.log(comId)