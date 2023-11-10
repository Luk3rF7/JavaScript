// imutavel
var ages =
  [12, 32, 32, 53]
ages[1] = 12;  // no!
ages = [];     // no!
ages.push("2") // no!

// imutavel
const ages = [12, 32, 32, 53]
const newAges = ages.map(function (age) {
  if (age == 12) { return 20; }
  else { return age; }
})

const changingObject = {
  willChange: 10
}

changingObject.willChange = 10;  // no!
delete obj.willChange            // no!
const obj = Object.freeze({
  cantChange: 'Locked'
})
// The `freeze` function enforces immutability.

obj.cantChange = 0      // Doesn't change the obj!
delete obj.cantChange   // Doesn't change the obj!
obj.addProp = "Gotcha!" // Doesn't change the obj!