// get e set são para proteger dado interno das instancia :
// get buscar valor 
// set  modificar certo valor
class Pessoa {
  constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
  }
  //set modificar
  setNome(nome) {
    this.nome = nome
  }
  //pega nome
  getNome() {
    return this.nome
  }
  setIdade(idade) {
    this.idade = idade
  }

  getIdade() {
    return this.idade
  }
  imprimir(nome, idade) {
    this.nome = nome;
    this.idade = idade;

    return `O nome da pessoa é: ${this.name} 
    sua idade é: ${this.idade}`
  }
  // imc com get set

  setPeso(peso) {
    this.peso = peso
  }

  getPeso() {
    return this.peso
  }

  setAltura(altura) {
    this.altura = altura
  }
  getAltura() {
    return this.altura;
  }
  imc(peso, altura) {
    this.peso = peso;
    this.altura = altura;

    return "imc: " + this.peso / (this.altura * this.altura);
  }
}

// classe filha de pessoa 

class Funcionario extends Pessoa {
  constructor(nome, idade, matricula, salarioBruto) {
    super(nome, idade)
    this.salarioBruto = salarioBruto;
    this.matricula = matricula;
  }

  setMatricula(matricula) {
    this.matricula = matricula;
  }
  getMatricula() {
    return 'valor da matricula é: ', this.matricula;
  }

  setSalarioBruto(salarioBruto) {
    this.salarioBruto = salarioBruto
  }

  getSalarioBruto() {
    this.salarioBruto
  }

  calcularSalario() {
    const salarioLiquido = this.salarioBruto - (this.salarioBruto * 0.13);
    return `${this.nome} tem um salário liquido de ${salarioLiquido}`
  }
  dadosCompleto() {
    return `
    Nome: ${this.nome},
    Idade: ${this.idade},
    Matricula: ${this.matricula},
    Salário: ${this.salarioBruto}
    `
  }

}
const funcionario = new Funcionario("Lucas", 29, 123, 2700);

console.log('idade é: ', funcionario.idade)
console.log(funcionario.calcularSalario())
console.log(funcionario.dadosCompleto())

// passando novos valores com Set: 
funcionario.setNome('vitoria')
funcionario.setIdade('24')
funcionario.setMatricula('1234')
funcionario.setSalarioBruto('2500')
console.log(funcionario.dadosCompleto())