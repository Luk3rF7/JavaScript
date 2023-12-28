const numbers = [1, -2, 3, -4, 5, -6, 7, -8, 9];
const positiveNumbers = numbers.reduce((acc, num) => {
  if (num > 0) {
    acc.push(num);
  }
  return acc;
}, []);

console.log(positiveNumbers);