class Cliente{
    constructor(nome,sobrenome){
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    falar(){
        console.log(`${this.nome} disse : Hello world!`);
    }
    comer(){
        console.log(`${this.nome} vai morder a maçã`)
    }
    beber(){
        console.log(`${this.nome} vai beber coca-geladinha !`)
    }
}

const p1 = new Cliente('Lucas','Felipe')