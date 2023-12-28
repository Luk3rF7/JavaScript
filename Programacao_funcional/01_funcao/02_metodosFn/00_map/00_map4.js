const cart = [
  { nome: 'Caneta', qtde: 10, preco: 7.99 },
  { nome: 'Impressora', qtde: 0, preco: 649.99 },
  { nome: 'Caderno', qtde: 4, preco: 27.10 },
  { nome: 'lapis', qtde: 3, preco: 5.82 },
  { nome: 'Tesoura', qtde: 1, preco: 19.20 },
];
const filterItem = product => product.nome;
const total = product => product.qtde * product.preco;

const itemName = cart.map(filterItem);
const cartTotal = cart.map(total);
const ntProduct = cart.map(item => {
  console.log(`
  Product : ${item.nome},
  Total : ${item.qtde * item.preco}
  `)
})


