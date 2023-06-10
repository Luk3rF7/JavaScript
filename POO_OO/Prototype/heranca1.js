const pai = { nome:'predo', corCabelo: ' preto'}

const filha1 = Object.create(pai)
filha1.nome = 'ana'
console.log(filha1.corCabelo)

const filha2 = Object.create(pai,{
    nome : {
        value: 'Bia',
        writable:false,
        enumerable:false
    }
})

console.log(filha2.nome)
filha2.nome = 'Carla'
console.log(`${filha2.nome}tem cabela ${filha2.cabelo}`);

console.log(Object.key(filha1))
console.log(Object.key(filha2))