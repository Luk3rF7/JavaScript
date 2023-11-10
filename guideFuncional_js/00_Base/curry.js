function produto(a, b) {
  //curried
  return a * b;
}
var dobro = produto(2);
console.log(dobro);

// usando closure
function produto(a) {
  //curried
  return function (b) {
    return a * b;
  };
}
var dobro = produto(2);
console.log(dobro(8));
console.log(produto(2)(8));