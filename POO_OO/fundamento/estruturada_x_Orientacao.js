//estruturado

const valorHora = 50;
const tempoEstimado = 20;
const desconto = valorHora * tempoEstimado * (10 / 100);
const custoEstimado = valorHora * tempoEstimado - desconto;

console.log(custoEstimado);

//POO
const job = new Job();
job.valorHr = 50;
job.tempoEstimados = 20;
job.desc = 10;
const custoEstimados = job.calcularEstimativa();
console.log(custoEstimado);
