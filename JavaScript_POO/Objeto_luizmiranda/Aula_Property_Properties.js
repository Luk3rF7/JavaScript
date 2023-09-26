//
function Produto(nome,preco,estoque){
    this.nome = nome;
    this.preco = preco;

    Object.defineProperty(this,'estoque', {
        enumerable : true, // mostrar chave
        value:estoque, //valor
        writable : false, //pode alterar
        configurable:true, // confgiuravel
    });
    Object.defineProperties(this, {
        nome:{
            enumerable : true, // mostrar chave
            value:nome, //valor
            writable : false, //pode alterar
            configurable:true, // confgiuravel
        },
        preco:{
            enumerable : true, // mostrar chave
            value:preco, //valor
            writable : false, //pode alterar
            configurable:true, // confgiuravel
        }
    });
}

const produtos = new Produto('Camiseta',20, 4);
console.log(produtos)
// console.log(Object.keys(p1))
// for(let chave in p1){
//     console.log(chave)
// }
