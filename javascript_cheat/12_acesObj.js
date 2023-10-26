// errado !

const obj = {
  firstName: 'Lucas',
  hello: `Hello ${this.firstName}`
}

console.log(obj.hello)

// jeito correto !

const user = {
  name: ' Luker',
  get hello() {
    return `Hello ${this.name}`
  }
}

console.log(user.hello)