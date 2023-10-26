var person = { name: 'user' }
function modificar(x, obj, elem, c) {
  let a = x * 5 // local
  obj.name = elem
  c = { name: 'Luker' }
}
let x = 10
let user = { name: 'Feliper' }
modificar(x, person, 'modificado', user)
console.log(x)
console.log(person.name)

