const arrNum = [1, 2, 3];

const mapArr = arrNum.map(x => x * 2)
console.log(mapArr)
const redArr = reduce((acc, curr) => acc * curr)
console.log(redArr)

const sortArr = arrNum.sort()
const sortArr2 = arrNum.sort((a, b) => a - b)
console.log(sortArr)
console.log(sortArr2)
const lengthArr = arrNum.length
console.log(lengthArr)