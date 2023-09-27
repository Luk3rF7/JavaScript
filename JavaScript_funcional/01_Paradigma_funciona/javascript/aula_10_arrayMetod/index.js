const nums = [1, 4, 6, 5, 7, 7, 8, 9, 10]
// simulando map:
let newNums_1 = []

for (let num of nums) {
  newNums_1.push(num * 2)
}
console.time('forOf')
console.log('For of: ', newNums_1);
console.timeEnd('forOf')

// MAP :
let numDobro = nums.map((num) => num * 2);

console.time('map')
console.log('MAP : ', numDobro);
console.timeEnd('map')
// simulando FILTER :

const newNum_2 = []
for (let num of nums) {
  if (num % 2 === 0) {
    newNum_2.push(num)
  }
}

console.log('simulando filter :', newNum_2)
//filter
const numPAr = nums.filter((num) => { return num % 2 === 0 })

console.log('Filter par: ', numPAr)
//simular o  Reduce
const sum = nums.reduce((oldNum, num) => {
  return oldNum + num
}, 0);

console.log('reducer: ', sum)


