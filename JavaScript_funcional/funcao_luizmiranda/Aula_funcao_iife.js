// IIFE - > immedately invoked function expression

function qualquerCoisa(){
    console.log(132465798)
}
qualquerCoisa();

(function(idade,peso,altura){
    const sobrenome= 'Felipe'
    function criaNome(nome) {
        return nome + '  '+ sobrenome;
    }
    function falaNome(){
        console.log(criaNome('Lucas'))
    }
    falaNome()
    console.log(idade,peso,altura)
})(30,80,1.80); // <-passo parametro aqui