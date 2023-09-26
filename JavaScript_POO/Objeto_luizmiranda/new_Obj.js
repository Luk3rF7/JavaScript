//farma construtora

const pessoa = new Object();
//dados
pessoa.nome = 'Lucas';
pessoa.sobrenome ='Felipe';
pessoa.idade = 29; 
//metodos: 
pessoa.falarNome = function(){
    return (`${this.nome} está falando seu nome. `)
};
pessoa.getDataNasc = function(){
    const dataAtual = new Date();
    return dataAtual.getFullYear() - this.idade;
}

//ver key e valor utilizo do objetos

for(let chave in pessoa){
    console.log(pessoa[chave])
}