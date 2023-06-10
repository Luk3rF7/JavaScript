/* - Object.value
    - Object.entries
    - Object.assign(des,any)
    - Object.getOwnPropertyDescriptor(o , 'prop')
    ...(spread)

--  Ja vimos:

    -Object.keys (retorna valores)
    -Object.freeze (congela o objeto)
    -Object.defineProperties (define varias propriedades)
    -Object.defineProperty (define uma propriedade)  */

const produto = {node: 'Caneca',preco:1.80 };
const item = {...produto,
material:'porcelana'};
const caneca = Object.assign({},produto,{material:'porcelana'})

item.nome = 'Café'
item.preco = 'Açurcar'
console.log(item)
console.log(produto)
/* Object.defineProperties(produto,'nome',{
    writable:false,
    configurable:false,
}) */
produto.nome = 'outra coisa'
console.log(Object.getOwnPropertyDescriptors(produto,'nome'))
for(let [chave,valor] of Object.entries(produto)){console.log(chave,valor)}