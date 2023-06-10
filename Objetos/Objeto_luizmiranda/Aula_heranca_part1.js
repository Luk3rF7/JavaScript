//e-commerce Produtos -> aumento ,desconto
//camiseta,caneca,lapis 
function Produto(nome,preco) {
    this.nome = nome;
    this.preco = preco;
}

Produto.prototype.aumento = function(quantia){
    this.preco += quantia;
}
Produto.prototype.desconto = function(quantia){
    this.preco -= quantia;
}
//construct
function Camiseta(nome,preco,cor){
    Produto.call(this,nome,preco);
    this.cor =cor;
}
//prototype - heranças
Camiseta.prototype = Object.create(Produto.prototype);
Camiseta.prototype.construcotr = camiseta;
Camiseta.prototype.aumento = function(percentual){
    this.preco =this.preco + (this.preco * (percentual / 100))
}

//constructor
function Caneca(nome,preco,material,estoque){
    Produto.call(this,nome,preco);
    this.material = material;
    this.estoque = estoque;

    Object.defineProperty(this,'estoque',{
        enumerable:true,
        configurable:false,
        get: function(){
            return estoque;
        },
        set: function(valor){
            if(typeof valor !== 'number')return;  
                      estoque = valor;
        }
    })
}
//prototype:
Caneca.prototype = Object.create(Produto.prototype);
Caneca.prototype.construcotr = caneca;


const produto = new Produto('generico',1235)
const camiseta = new Camiseta('Regata',7.5,'Preta')
const caneca = new Caneca('natal',13,'Pl[astico',5)
console.log(produto)
console.log(camiseta)