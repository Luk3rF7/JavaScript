//literal '' , " "
// array literal  []
//  numero literal 13245

/* molde Factory function / Constructor function / Classes */



const pessoa = {
    //corpo do objeto
    nome:'Lucas',
    apelido:'Lobo',
    sobrenome: 'Felipe',
};
const chave = 'apelido';
console.log(pessoa['apelido'])
console.log(pessoa.sobrenome)
console.log()
console.log('Contructora ......')
//constructor 

const cliente  = new Object()

cliente.nome = 'Vitoria';
cliente.sobrenome = 'Neves';
cliente.idade = 30;

//utilizando metodos
cliente.falarNome = function(){
    return (`${this.nome}-diz: como voce está ?`)
}
//metodo para saber data de nascimento
cliente.getDataNascimento = function(){
    const dataAtual = new Date();
    return  dataAtual.getFullYear() - this.idade;
}

// invocando 
console.log(cliente.getDataNascimento());
cliente.falarNome();
// delete cliente.nome; // apaga chave do objeto
console.log(cliente.nome);
console.log(cliente.sobrenome);