/* compose */
var compose = function (f, g) {
  /* crio função */
  return function (x) {
    return f(g(x));
  };
};
/* crio função que vai receber mudança */
var toUpperCase = function (x) {
  return x.toUpperCase();
};
/* função que vai adicionar exclamação */
var exclaim = function (x) {
  return x + '!';
};

var angry = compose(toUpperCase, exclaim);

angry('ahhh'); // AHHH!