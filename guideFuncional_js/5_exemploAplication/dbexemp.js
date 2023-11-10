// imperative
console.timeLog('imp')
const makes = [1, 2, 3, 4, 5];
const makesArr = [];
let cars = []
for (let i = 0; i < cars.length; i += 1) {
  makes.push(cars[i].make);
}
console.log(cars)
console.log(makes)
console.timeEnd('imp')

// declarative
const makes1 = cars.map(car => car.make);
console.log(makes1)

// imperative
const authenticate = (form) => {
  const user = toUser(form);
  return logIn(user);
};

// declarative
const authenticate = compose(logIn, toUser);