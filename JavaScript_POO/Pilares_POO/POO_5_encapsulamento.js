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

  imprimir(nome, age) {
    this.nome = nome;
    this.age = age;

    return `O nome da pessoa é: ${this.name} 
    sua idade é: ${this.age}`
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

const pessoa = new Pessoa();

console.log(pessoa.imprimir('user', 18))
console.log(pessoa.imc(82.5, 1.80))
class Caixa {
  constructor(codigo, saldo) {
    private this.codigo = codigo;
  public this.saldo = saldo
}


depoistar(valor) {
  this.saldo += valor;

  return `Depositou um valor de R$ ${valor}`
}

mostrarSaldo() {
  return `Saldo atual R$ ${this.saldo}`
}

}
const caixa = new Caixa(1, 60);
console.log(caixa.codigo)
console.log(caixa.mostrarSaldo())
console.log(caixa.depoistar(100))
console.log(caixa.depoistar(100))
console.log(caixa.depoistar(100))
console.log(caixa.depoistar(100))
console.log(caixa.mostrarSaldo())
