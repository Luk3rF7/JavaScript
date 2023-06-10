//
function Produto(nome,preco,estoque){
    this.nome = nome;
    this.preco = preco;

    let estoquePrivado = estoque
    Object.defineProperty(this,'estoque', {
        enumerable : true, // mostrar chave
        configurable:true, // confgiuravel
       get: function(){
        return estoquePrivado
       },
    //    set: function(valor){
    //        if(typeof valor !== 'number'){
    //        throw new TypeError('Mensagem')
    //        }
    //    }
    });
}

const produtos = new Produto('Camiseta',20, 4);
console.log(produtos)
produtos.estoque = 100
console.log(produtos.estoque)

function criaProduto(nome){
    return {
        get nome(){
            return nome;
        },
        set nome(valor){
            valor = valor.replace('coisa', '');
            nome = valor;
        }
    }
}
const p2 = criaProduto('Tenis')
p2.nome ='meia'
console.log(p2.nome)