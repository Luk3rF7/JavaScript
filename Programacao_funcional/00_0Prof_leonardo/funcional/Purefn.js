
var calculate = function (fn, x, y) {
  return fn(x, y);
};

var sum = function (x, y) {
  return x + y;
};

var mult = function (x, y) {
  return x * y;
};

calculate(sum, 2, 5); // 7
calculate(mult, 2, 5); // 10