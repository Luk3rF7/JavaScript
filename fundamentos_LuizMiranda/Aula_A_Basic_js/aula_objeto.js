const pessoa1 = {
    nome:'Lucas',
    sobrenome: 'Felipe',
    idade:25,

    fala(){
        console.log(`${this.nome} Hello World! \n
        hoje eu completo  ${this.idade}`);
    },
    incrementaIdade(){
        this.idade++;
    }
};
pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();


const pessoa2 = {
    nome:'vitoria',
    sobrenome: 'Felipe',
    idade:20
};

console.log(pessoa1.nome);
console.log(pessoa2.nome);

//criando obj com função

function CriaPessoa (nome,sobrenome,idade){ // parametro
   return { //factory
    nome,
    sobrenome,
    idade
};

}

const pessoa3 = CriaPessoa('Lucas','Felipe', 25);//argumento
const pessoa4 = CriaPessoa('vitoria','Felipe', 25);//argumento
const pessoa5 = CriaPessoa('Maria','Felipe', 25);//argumento
const pessoa6 = CriaPessoa('Rhavi','Felipe', 25);//argumento
const pessoa7 = CriaPessoa('Mary','Felipe', 25);//argumento
const pessoa8 = CriaPessoa('Paul','Felipe', 25);//argumento
console.log(pessoa3.nome,pessoa4.idade,pessoa5.nome,pessoa6.sobrenome,pessoa7.sobrenome,pessoa8.idade);