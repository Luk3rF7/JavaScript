const nomes = ["maria","Felipe","marcio","joao"]

console.log("===== push")
const push = nomes 
// simulando push
push.splice(3 , 0 ,'Lucas')
console.log(push)
console.log("======== UNSHIFT")
//unshift
const unshift = nomes
unshift.splice(0,0,"vicky","neves")
console.log(`unshift teste:${unshift}`)
console.log("======== POP");
const pop = nomes
pop.splice(1,4)
console.log(pop)

console.log("===")