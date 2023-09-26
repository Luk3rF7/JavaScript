//return
// retorna um valor
// termina a função 

function soma(a,b){
    return a+b //retorna o valor
}

function soma2(a,b){
    console.log(a+b) //retorna no console
}

soma(5,2)
//functon objeto
function criaPessoa(nome,sobrenome){
    return{
       nome,sobrenome
}
}
const p1 = criaPessoa('Lucas','Felipe')
const p2 = {
    nome: 'João',
    sobrenome:'Nascimento',
}

console.log(p1)
console.log(p2)
// function boneca 
function falaFrase(comeco){
    function falaResto(resto){
        return  comeco + ' ' +resto;
    }
    return falaResto
}

const fala = falaFrase('Olá');
const resto =fala('mundo!');
console.log(resto)
//criando multiplicado closer
function criaMultiplicador(multiplicador){
    //multiplicador
    function multiplicacao(n){
        return n * multiplicador;
    }
    return multiplicacao
}
//outro metodo 
function criaMultiplicador2(multiplicador){
    return function(n){
        return n * multiplicador
    };
}
//retornando funcao 
const duplica = criaMultiplicador(2)
const triplica = criaMultiplicador(3)
const quadriplica = criaMultiplicador(4)

console.log(duplica(2))