const person = {
  name: 'lucas',
  address: {
    city: "são paulo",
  }
}

console.log(person.office.tel) // error
console.log(person?.tel) // undefined