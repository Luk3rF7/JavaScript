function Produto(nome,preco,estoque){
    this.nome = nome;
    this.preco = preco;

        let estoquePrivado = estoque;
    Object.defineProperty(this,'estoque',{
        enumerable : true,
        configurable:true,
        get:function(){
            return estoquePrivado;
        },
        set:function(value){
            if(typeof value !== 'number'){
                console.log('Bad value')
                return
            }
            estoquePrivado = valor;
        }
    })   
}

const p1 = new Produtp('Camiseta',20,3)
console.log(p1)