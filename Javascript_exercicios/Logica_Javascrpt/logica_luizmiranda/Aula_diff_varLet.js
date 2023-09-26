const verdadeira = true;

//var so tem escopo de funcao
let nome = 'Lucas';
var nome2 = 'Lucas';

// let tem escopo de bloco: expressao bloco aninhado
if(verdadeira){
    let nome = 'Felipe';  // criando 
    var nome2 = 'Ronaldo' // redeclarando..
    console.log(nome,nome2)
    
    if(verdadeira){
        let outro = 'Outra coisa '
        console.log('Ok')
    }
}
//com car
console.log('usando var')

if(verdadeira){
    var nome2 = 'Felipe'; // criando 
    console.log(nome,nome2)
    
    if(verdadeira){
        var outro2 = 'Outra coisa '
        console.log('Ok')
    }
}
var sobrenome ='Otavio'

//escopo da funcao pega dos vizinho ,mas e egoista !
function falaOi() {
    var nome ='Luiz'
    console.log(nome,sobrenome)

    if(verdadeira){
        console.log(nome,sobrenome)
    }
}
falaOi()