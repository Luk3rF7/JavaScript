class Pessoa {
    constructor(nome,sobrenome){
        this.nome =nome;
        this.sobrenome =sobrenome;

    }

    //metodos
    falar(){
console.log(`${this.nome} está falando.`)
    }
    comer(){
        console.log(`${this.nome} esta comendo`)
    }
    beber(){
        console.log(`${this.nome} esta bebendo`)
    }
}


class  Produto{
    constructor(produtos,preco){
        this.produtos = produtos;
        this.preco = preco;
}

            //metodo
            descricao(){
                console.log(`${this.produtos} Produto  Fabricado no Brasil`)
            }
            valores(){
                console.log(`Custara num valor de ${this.preco}`)
            }
        
}

const Prod1 = new Produto('xícara',9.99)
console.log(Prod1)


function Pessoa2(nome,sobrenome){
    this.nome=  nome;
    this.sobrenome=sobrenome;
}

Pessoa2.prototype.falar = function(){
    console.log(`${this.nome} esta falando.`)
}


//molde
const p2 =new Pessoa2('Lucas','felipe')
const p1 = new Pessoa('vitoria','neves')
console.log(p1)
console.log(p2)