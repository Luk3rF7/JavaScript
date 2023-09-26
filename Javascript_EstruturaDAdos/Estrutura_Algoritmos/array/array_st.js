const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
numbers.reverse();
numbers.sort();
console.log(numbers);
//func
function compare(x, y) {
  if (x < y) {
    return -1;
  }
  if (x > y) {
    return 1;
  }
  return 0;
}
console.log("utilizando func compare: ", numbers.sort(compare));
// arrow func
numbers.sort((a, b) => a - b);
console.log("sort (a,b) : ", numbers);
