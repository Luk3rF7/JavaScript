const Nothing = () => ({
  flatMap: _ => Nothing(),
  isNothing: true,
  toString: () => 'Nothing'
})

//implementacao do just

const Just = value => ({
  flatMap: fn => {
    try {
      return Maybe(fn(value));
    } catch {
      return Nothing();
    }
  },
  isNothing: false,
  toString: () => `Just(${value})`
});

// funcao aux para construir just ou nothing
const Maybe = value => value == null ? Nothing() : Just(value)

// exemplo simples elevar ao quadrado 
const square = x => Maybe(x).flatMap(val => val + val)

console.log(square(4).toString())
console.log(square(null).toString())