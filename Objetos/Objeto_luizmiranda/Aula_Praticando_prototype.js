// constructor
function Produto(nome,preco){
    this.nome = nome;
    this.preco = preco;

}
//metodo desconto com prototype
Produto.prototype.desconto =function(percentual){
    this.preco =this.preco - (this.preco *(percentual / 100));
}
//metodo aumenta
Produto.prototype.aumento =function(percentual){
    this.preco =this.preco + (this.preco *(percentual / 100));
}
const p1 = new Produto('camiseta',50)
//p1.desconto(100)
p1.aumento(100)
console.log(p1)

//literal 
const p2 ={
    nome:'caneca',
    preco:15

};

Object.setPrototypeOf(p2, Produto.prototype);
p2.aumento(10)

const p3 = Obejct.create(Produto.prototype,{
    preco: {
        writable: true,
        configurable:true,
        enumerable:true,
        value:113
    },
    tamnaho2:{
        writable:true,
        configurable:true,
        enumerable:true,
        value: 42
    },
});
p3.aumento(10)
console.log(p3
    )