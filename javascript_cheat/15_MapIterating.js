const person = new Map();

person.set("Name", "Lucas")
person.set("Idade", 28) //
person.set('profissao', 'developer') //

person.get('Idade')
person.get('age')
person.has('name')
person.size
person.delete('idade')
person.clear()

person.set({ 'a': 1 }, "alphabeto")

console.log(person)

//  iterage over values
for (const value of person) {
  console.log('valores :', value)
}

// iterate over keys

for (const key of person.keys()) {
  console.log('chaves : ', key)
}

// iterate over keyvalue pairs

for (const [k, v] of person.entries()) {
  console.log('valor e chave', k, v)
}