const arr = [20]

function fib(x) {
  let result = 0;

  if (x === 1 || x === 2) {
    return 1
  }

  result = fib(x - 1) + fib(x - 2);

  return result


}
// memorization 

function memoryFib(n, memo) {
  let result = 0;

  if (memo[n]) {
    return memo[n]
  }

  if (n === 1 || n === 2) {
    return 1
  }

  result = memoryFib(n - 1, memo) + memoryFib(n - 2, memo);
  memo[n] = result
  return result
}
console.log(fib(10))
console.log(memoryFib(10, []))