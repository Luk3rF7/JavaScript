let controle = 'Segui a vida...'
const nome = ' Lucas'
let i = 0;

//nunca esqueça de criar variavel de controle i++/i--
while(i <= nome.length ) {
    console.log(nome[i])
i++;
}
console.log(controle)

console.log('criando função com numero aleatorio')
function random(min,max){
const r = Math.random() * (max - min) + min
return Math.floor(r);

}


const min = 1
const max = 50
let rand = random(min,max)

while(rand !== 10){
    rand = random(min,max)
    console.log(rand)
}

//do while vai checkar
console.log('DO..While sendo chekando !')

do{
  console.log(rand)
}while(rand !== 10)