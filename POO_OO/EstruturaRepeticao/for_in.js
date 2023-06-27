//for.. in

let person = {
  name: "John",
  age: 30,
  weight: 88.6,
};

for (let prop in person) {
  console.log(prop);
  console.log(
    person[prop] //
    // person["name"]
    // person.name
  );
}
