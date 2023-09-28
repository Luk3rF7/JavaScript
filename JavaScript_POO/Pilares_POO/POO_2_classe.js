class Pessoa {
  imprimir(name, age) {
    this.name = name;
    this.age = age;

    return `O nome da pessoa é: ${this.name} 
    sua idade é: ${this.age}`
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
  depoistar(valor) {
    this.saldo += valor;

    return `Depositou um valor de R$ ${valor}`
  }

  mostrarSaldo() {
    return `Saldo atual R$ ${this.saldo}`
  }

  retirarSaldo(retirar) {
    return
  }

}

const caixa = new Caixa();
caixa.saldo = 100;
console.log(caixa.mostrarSaldo())
console.log(caixa.depoistar(100))
console.log(caixa.depoistar(100))
console.log(caixa.depoistar(100))
console.log(caixa.depoistar(100))
console.log(caixa.mostrarSaldo())
console.log('Sacou ======')
console.log(caixa.retirarSaldo(200))
console.log(caixa.mostrarSaldo())