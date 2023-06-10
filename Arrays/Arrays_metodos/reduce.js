// Reduce concatenar dados ou reduzir
const produt = [
    {id:1,preco:10.00,quantidade: 1},
    {id:2,preco:15.00,quantidade: 2},
    {id:1,preco:30.00,quantidade: 1}
]
//utilizando reduce: posso guarda numa variavel

const carrinhoSum = produt.reduce(
    (soma,item) => // 1 params recebe soma e segundo item
    item.preco + soma, 0)
console.log(carrinhoSum) 

// utilizando map + reduce:

const totalCarrinho = produt // guardo na varivel func red e map
    .map(prodt => prodt.preco * prodt.quantidade) // vou pega preço vezes quantidade
    .reduce(
        (soma,subtotal) => // recebe 2 params soma e subtotal
        subtotal + soma, 0
    )
console.log(totalCarrinho)
