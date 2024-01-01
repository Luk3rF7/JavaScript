// # 1

const fibo = []
fibo[0] = 0;
fibo[1] = 1;
fibo[2] = 1;

for (let i = 3; i < 20; i++) {
  fibo[i] = fibo[i - 1] + fibo[i - 2]
}

console.log(fibo)