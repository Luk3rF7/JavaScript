const score = [32, 25, 1, 45, 65];
let usm = score[0]
for (let i = 0; i < score.length; i++) {
  if (score[i] < usm)
    usm = score[i]
}

console.log(usm)

const num = [1, 2, 3, 4, 5, 6, 8, 10, 11];
const numPar = num.filter(num => num % 2 === 0);
const sumPar = numPar.reduce((acc, value) => acc + value);

console.log(sumPar);
