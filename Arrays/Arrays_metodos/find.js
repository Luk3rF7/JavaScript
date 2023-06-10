// estoque
const estoque = [
  { id: 1, preco: 10.0, quantidade: 1, stoque: 20 },
  { id: 2, preco: 15.0, quantidade: 0, stoque: 5 },
  { id: 1, preco: 30.0, quantidade: 1, stoque: 2 },
];
// reduce.filter ,maps com function pure
const subtotal = (item) => item.preco * item.quantidade;
const filtroEmEstoque = (item) => item.stoque >= item.quantidade;
const soma = (soma, subtotal) => subtotal + soma;
const totalCarrinho = estoque
  .filter(filtroEmEstoque)
  .map(subtotal)
  .reduce(soma, 0);

console.log(totalCarrinho);

const produto1 = estoque.find(item => item.id === 1)
console.log(produto1)