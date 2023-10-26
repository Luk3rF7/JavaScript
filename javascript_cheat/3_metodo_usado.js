const arr = [1, 2, 3]

const a = arr.shift()
console.log(a)
const b = arr.unshift(9)
console.log(b)
const c = arr.pop()
console.log(c)
const d = arr.push(0)

/* 
      todo como funciona :
               unshift(5) [5,1,2]
                   ||
[2,3] shift <-  array = [1,2,3]   -> pop()[1,2]
                   ||
               push(4)  [1,2,3,4] 
*/

// * com splice podemos simular tbm esse metodo 
const num = [1, 2, 3]
console.log('array :', num)
const slicShift = num.splice(0, 0, 0)
console.log('Slice shift', num)
const slicUnshift = num.splice(0, 1)
console.log('Slice unshift', num)
const slicPush = num.splice(num.length, 0, 4)
console.log('Slice push', num)
const slicPop = num.splice(-1, 1)
console.log('Slice pop', num) 