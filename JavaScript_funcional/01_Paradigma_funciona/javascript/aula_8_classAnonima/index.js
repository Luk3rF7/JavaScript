// classe e como funciona

const usuario = {
  nome: 'Lucas',
  idade: 29
}
class IMC {
  constructor(peso, altura) {
    this.peso = peso
    this.altura = altura
  }

  calculo() {
    return
    `
    seu peso é ${this.peso}
    sua altura é ${this.altura}
    `
  }
}

class Pessoa {
  //instancia
  constructor(name, idade) {
    this.name = name,
      this.idade = idade
  }
  // metodo
  datePessoa() {
    return `
    Nome da pessoa é : ${this.name}
    Sua idade é: ${this.idade}
    `
  }

  maiorIdade() {
    if (this.idade < 18) {
      return 'Menor de idade'
    } else {
      return 'Maior de idade'
    }
  }

}
//instancia
const pessoa = new Pessoa('lucas', 18)
const user1 = new Pessoa('user 2', 50)
const user2 = new Pessoa('user 3', 38)
const user3 = new Pessoa('user 4', 15)

//

console.log('Dados :', pessoa.datePessoa())
console.log('===============')
console.log('A pessoa é idade :', pessoa.maiorIdade())
console.log(pessoa.calculo(52, 60))
//

console.log('Dados :', user1.datePessoa())
console.log('===============')
console.log('A pessoa é idade :', user1.maiorIdade())
//

console.log('Dados :', user2.datePessoa())
console.log('===============')
console.log('A pessoa é idade :', user2.maiorIdade())
//

console.log('Dados :', user3.datePessoa())
console.log('===============')
console.log('A pessoa é idade :', user3.maiorIdade())

