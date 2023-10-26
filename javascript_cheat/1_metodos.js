const arr = ['a', 'b', 'c']
const num = [1, 2, 3]
arr.forEach(x => console.log(x))

const everyNum = num.every(x => x < 10) // true
console.log(everyNum)
const someNum = num.some(x => x < 2) // true
console.log(someNum)
const filNum = num.filter(x => x < 2) // true
console.log(filNum)

