function Pessoa(nome,sobrenome ){
    this.nome = nome;
    this.sobrenome = sobrenome;
}

const p1 = new Pessoa('Lucas','Felipe')
console.log(p1)

function Users(name,email,password){
    this.name = name;
    this.email = email;
    this.password = password;
}

const user1 = new Users('Luke','Luke@example.com' , 123465798);

console.log(user1)