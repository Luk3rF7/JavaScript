function Produto(nome,preco,estoque){
    this.nome = nome;
    this.preco = preco;
    
//confi um propr
    Object.defineProperty(this,'estoque',{
        enumerable: true,
        value: estoque,
        writable: false,
        configurable:false
    });

    // config varias props
    Object.defineProperties(this, {
        nome:{
        enumerable: true,
        value: estoque,
        writable: false,
        configurable: false
        },
        preco: {
        enumerable: true,
        value: preco,
        writable: false,
        configurable: false
        },
        estoque:{
        enumerable: true,
        value: estoque,
        writable: false,
        configurable:false
        }
    })
}

const p1 = new Produto('Camiseta',20,3);
console.log(p1)