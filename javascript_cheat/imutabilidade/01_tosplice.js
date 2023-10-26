const pessoas = [
  { name: 'user', id: 1 },
  { name: 'user 2', id: 2 },
  { name: 'user 3', id: 3 },
]

pessoas.splice(2, 0, { name: 'user 4', id: 4 })
console.log(pessoas)

// com tospliced 

const person = [
  { name: 'user 5', id: 5 },
  { name: 'user 6', id: 6 },
  { name: 'user 7', id: 7 }
]

const slicedPerson = person.toSpliced(2, 0, { name: 'spliced', id: 8 })

console.log(person)
console.log(slicedPerson)