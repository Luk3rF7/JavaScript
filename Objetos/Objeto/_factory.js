function criaPessoa(nome,sobrenome){
    return{
        nome,
        sobrenome,
        get nomeCompleto(){
            return `${this.nome} ${this.sobrenome}`      
        }
    };
}

const pessoa = criaPessoa('Lucas','Felipe');
console.log(pessoa.nomeCompleto());