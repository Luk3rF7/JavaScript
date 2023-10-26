// 

const obj = {
  name: 'Lucas',
  // fazemos metodo
  toString() {
    //passamos valor do nome
    return `{name: ${this.name}}`
  }
}

console.log(obj.toString())
obj.name = 'user 1'
console.log(obj)
console.log(obj.toString())