//utilizando filter + map + reduce
const subtotal = item => item.preco * item.quantidade
const filtroEmEstoque = item => item.stoque >= item.quantidade
const soma = (soma, subtotal) => subtotal + soma
const totalCarrinho = estoque
  .filter(filtroEmEstoque)
  .map(subtotal)
  .reduce(soma, 0);

console.log(totalCarrinho);