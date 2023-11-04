const data = [
  { name: "user 1", age: 23, salary: 4000, active: true, team: "Frontend", bonus: 0 },
  { name: "user 2", age: 36, salary: 3000, active: true, team: "Backend", bonus: 0 },
  { name: "user 3", age: 32, salary: 6000, active: true, team: "Mobile", bonus: 0 },
  { name: "user 4", age: 28, salary: 3500, active: true, team: "Designer ui", bonus: 0 },
  { name: "user 5", age: 22, salary: 2500, active: false, team: "Backend", bonus: 0 },
]

const user = data.find((user) => {
  return user.age >= 25
})
console.log(user)
const filtUser = data.filter((users) => {
  return users.salary >= 4000
})
console.log(filtUser)
const userMap = data.map((user, index) => {
  if (user.salary <= 2500) {
    user.salary += 900;
    user.bonus += 1
  }

  return {
    name: user.name,
    salary: user.salary,
    bonus: user.bonus

  }
})

console.log(userMap)