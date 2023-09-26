//Declarar function de função(function hoisting)

falaOi()
function falaOi() {
    console.log('Oie')
}

// first-class objects (objetos de primeira classe)
//expresão  //function expression
const souUmDado = function() {
    console.log('Sou um dado.')
}

souUmDado();

function executaFuncao(funcao){
    console.log('Executando sua funcao')
    funcao();
}

executaFuncao(souUmDado);

//arrow function
const funcArrow = () =>{
    console.log('funcArrow')
}
const nome = () => {
    console.log('Meu nome é Lucas')
}
funcArrow();
nome();

setInterval(function(){
    console.log('testando....')
}, 1000)

//dentro de um objeto posso ter uma função

const obj = {
    falar:function(){
        console.log('Estou falando')
    }
}
obj.falar();