var numbers = [1, 2, 3];

var sum = function (x, y) {
  return x + y;
};

var numbersSum = numbers.reduce(sum, 0); // 6

/* Es6 */
const numbers = [1, 2, 3];
const sum = (x, y) => x + y;
const numbersSum = numbers.reduce(sum, 0); // 6

/*  */
const numbers = [1, 2, 3];
const sum = (x, y) => x + y;
const numbersSum = numbers.reduce(sum, 10); // 16
/* nao so somar  */
var months = ['JAN', 'FEV', 'MAR', /*...*/, 'DEZ'];

var monthsShortener = function (previous, current) {
  return previous + '/' + current;
};

var shortenedMonths = months.reduce(monthsShortener, '');
// /JAN/FEV/MAR ... /DEZ
/* 2 - condição */
var months = ['JAN', 'FEV', 'MAR', /*...*/, 'DEZ'];

var monthsShortener = function (previous, current) {
  if (previous === '') {
    return current;
  } else {
    return previous + '/' + current;
  }
};

var shortenedMonths = months.reduce(monthsShortener, '');
// JAN/FEV/MAR ... /DEZ
/* versão Es6 */
const months = ['JAN', 'FEV', 'MAR', /*...*/, 'DEZ'];

const monthsShortener = (previous, current) => {
  if (previous === '') {
    return current;
  } else {
    return previous + '/' + current;
  }
};

const shortenedMonths = months.reduce(monthsShortener, '');
// JAN/FEV/MAR ... /DEZ