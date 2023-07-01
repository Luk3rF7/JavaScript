let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
function multOF13(elem, index, array) {
  return elem % 13 == 0;
}

console.log(numbers.find(multOF13));
console.log(numbers.findIndex(multOF13));
