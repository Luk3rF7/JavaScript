// função inpura :
const x = 10;
const inpureSum = y => x + y;

let z = 10;

const inpureSumInZ = y => z += y
// não modifica result 
console.log(inpureSumInZ(4))
console.log(inpureSumInZ(5))
//função puras
const pureSum = (x, y) => x + y
// modifica resultas mas contem unica função imutavel
console.log(pureSum(10, 50))
console.log(pureSum(10, 5))