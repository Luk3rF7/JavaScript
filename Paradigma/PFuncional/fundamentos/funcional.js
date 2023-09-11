//exemplo formatar dados:

const shoppingCart = {
  user: {
    id: 1,
    firstName: 'john',
    lastName: 'Doe',
  },
  items: [
    {
      product: { id: 1, name: 'apple' },
      quantity: 10,
    },
    {
      product: { id: 2, name: 'Orange' },
      quantity: 6,
    },
  ]
}

function formatShoppingCart(shoppingCart) {
  const result = {}
  // modulando dados
  result.user = {
    user: {
      id: shoppingCart.user.id,
      name: `${shoppingCart.user.firstName}${shoppingCart.user.lastName}`
    }
  }
  //
  result.item = shoppingCart.items.map((item) => {
    return {
      ...item,
      product: { id: item.product.id },
    };
  })
  // utilizo forEarch para manipular array
  // shoppingCart.items.forEach((item) => {
  //   item.product = { id: item.product.id }
  // });
  //retorna a saida
  return result;
}

console.log(formatShoppingCart(shoppingCart));
/*  
  * exemplo de como vai ficar 
  */
/* const shoppingCart = {
  user: {
    id: 1,
    name: 'john Doe',
  },
  items: [
    {
      product: { id: 1 },
      quantity: 10,
    },
    {
      product: { id: 2 },
      quantity: 6,
    },
  ]
} */