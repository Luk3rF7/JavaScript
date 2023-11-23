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

class ProgramFrontEnd extends Program {
  constructor(marcacao) {
    super()
    this.linguagemMarcacao = marcacao
    this.framework = []
  }

  Framework(...elem) {
    return this.framework.push(...elem)
  }
}
class ProgramBackEnd extends Program {
  constructor() {
    super()
    this.dataBase = []
  }

  bancoDados(elem) {
    return this.dataBase.push(elem)
  }
}
const frontend = new ProgramFrontEnd()
// criando programador front end

frontend.name = "Laura"
frontend.idade = 18
frontend.linguagem = "Javascript"
frontend.formacao = 'Udemy'
frontend.linguagemMarcacao = "html"
frontend.Framework('React', 'Vue', 'Angular')

console.log(frontend)

const backend = new ProgramBackEnd()

backend.name = "julia"
backend.idade = 29
backend.linguagem = 'Python'
backend.altura = 1.60
backend.formacao = "UFBC"
backend.dataBase = 'Oracle'

console.log(backend)