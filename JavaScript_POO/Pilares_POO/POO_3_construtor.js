// construtor faz a inicialização da instancia :

class Pessoa {
  //seu quiser inicializar um valor:
  constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
  }

  imprimir() { }
  imc() { }
}

class Caixa {
  constructor(codigo, saldo) {
    this.codigo = codigo;
    this.saldo = saldo
  }
  depoistar(valor) {
    this.saldo += valor;

    return `Depositou um valor de R$ ${valor}`
  }

  mostrarSaldo() {
    return `Saldo atual R$ ${this.saldo}`
  }

  retirarSaldo(retirar) {
    return this.saldo - retirar
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
console.log('Sacou ======')
console.log(caixa.retirarSaldo(200))
console.log(caixa.mostrarSaldo())