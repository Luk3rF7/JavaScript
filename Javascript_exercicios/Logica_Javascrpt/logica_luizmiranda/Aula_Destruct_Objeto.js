const pessoa = {
    nome:'Kaio',
    sobrenome:'Miranda',
    idade:30,
    endereco: {
        rua:'Av. São Paulo',
        numero: 320
    }
}

/*
 //Destruturação via Objeto

const { nome,sobrenome,idade } = pessoa;
console.log(nome,sobrenome,idade);
 */
// trocando nome da var
const { nome:teste ='testando',sobrenome } = pessoa
console.log(teste,sobrenome)
//pegando info dentro do objeto e trocando nome da variavel
const {
endereco : {rua: r, numero}, 
endereco } = pessoa;
console.log()