// Função impura
const a : number = 10
const impureSum = (y: number): number => a + y

let z: number = 10
const impureSumInZ = (y: number): number => z += y

console.log(impureSumInZ(4))
console.log(impureSumInZ(5))

// Função pura
const pureSum = (a: number, y: number): number => a + y

console.log(pureSum(5, 7))
console.log(pureSum(5, 10))