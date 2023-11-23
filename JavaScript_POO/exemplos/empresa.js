class Program {
  constructor(name, altura, idade, linguagem, formacao) {
    this.name = name;
    this.altura = altura;
    this.idade = idade;
    this.linguagem = linguagem
    this.formacao = formacao
  }
  andar() {
    console.log('Programador andou!')
  }
  program() {
    console.log('Gerou um codigo!')
  }
  cafe() {
    console.log('programador pausou para toma cafe!')
  }
}

module.exports = Program;
const developer = new Program();

// metodos 
developer.program()
developer.andar()
developer.cafe()
// adicionando props
developer.name = 'User'
developer.idade = 25
developer.altura = 1.50
developer.linguagem = ["python", "javascript", "DataBase"]
developer.formacao = ["udemy", "UFBC"]

// instanciando 
console.log(developer)
