//mixing
const falar ={
    falar(){
        console.log(`${this.nome} está falando.`)
    }
}
const comer ={
    comer(){
        console.log(`${this.nome} está comendo.`)
    }
}

const beber = {
    beber(){
        console.log(`${this.nome} está bebendo.`)
    }
}

const pessoaProtoype = {...falar, ...comer, ...beber}
const pessoaPrototype = Object.assign({}, falar,comer,beber )

function criaPessoa(nome,sobrenome){
    const pessoaPrototype = {
            //metodos        
            falar(){
                console.log(`${this.nome} está falando.`)
            },
            comer(){
                console.log(`${this.nome} está falando.`)
            },
            beber(){
                console.log(`${this.nome} está falando.`)
            },
        };
    return Object.create(pessoaPrototype, {
        nome:{value:nome},
        sobrenome:{value:sobrenome},
    });
        
}

const p1 =  criaPessoa('Lucas','Felipe');
const p2 =  criaPessoa('victoria','Felipe');
console.log(p1)
console.log(p2)