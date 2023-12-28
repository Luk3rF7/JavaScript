function exec(fn, a, b) {
  return fn(a, b);
}
const somarNoTerminal = (a, b) => console.log(a + b);
const subtrairNoTerminal = (a, b) => console.log(a - b);
const subtrair = (x, y) => x - y;


exec(somarNoTerminal, 56, 38);
exec(subtrairNoTerminal, 182, 27);

//

const result = exec(subtrair, 50, 25);
console.log(result);

// 
const fn = () => console.log('Exec...');
setInterval(fn, 1000);