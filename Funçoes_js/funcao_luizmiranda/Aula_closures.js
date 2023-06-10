//global

function retornaFuncao(nome){
    // const nome = 'Luiz';
    return function(){
        return nome;
    }
}

const funcao = retornaFuncao('Lucas'); //closures
console.dir(funcao);