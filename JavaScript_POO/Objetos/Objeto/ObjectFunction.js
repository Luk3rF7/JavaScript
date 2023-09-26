const pessoa = {
    nome: 'Rebeca',
    idade: 2,
    peso: 14
}

console.log(Object.keys(pessoa)) 
Object.entries(pessoa,'dataNascimento', {
    enumerable : true,
    writable: false,
    value : '01/01/2023'
})

pessoa.dataNascimento = '01/01/1994'
console.log(pessoa.dataNascimento)
console.log(Object.keys(pessoa))

console.log('========= Object.assign ===========')

const dest = { a: 1}
const a = { b: ' sou obj a'}
const b = { c: ' sou obj b' }

const recObj = Object.assign(dest,a,b)

console.log(recObj)

