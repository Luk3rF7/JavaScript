function Person(nome) {
  this.nome = nome
  return 'hi'
}

const user = new Person('Luker')

console.log(user)