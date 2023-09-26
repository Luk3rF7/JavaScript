//Factory function 
function criarPessoa(nome,sobrenome) {
    return{
        nome,
        sobrenome,
        nomeCompleto(){
            return `${this.nome} ${this.sobrenome}`
        }
    };
}

const p1 = criarPessoa('Lucas','Felipe')
console.log(p1)
console.log('Usando metodo')
console.log(p1.nomeCompleto())
console.log()
console.log('utilizando Constructor function')

// constructor function
function Pessoa(nome,sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;
    // Object.freeze(this) congela e funciona com array
}
//{} <- this
const cliente = new Pessoa('Lucas','Candido');
const cliente2 = new Pessoa('vitoria','Neves');

//utilizando Delete 

cliente.nome = 'Outra coisa';
cliente.sobrenome = 'QLQ';
cliente.fala = function(){ console.log('Descongelado !!')}
cliente.fala();
console.log(p1);

