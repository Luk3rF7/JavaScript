console.log("Hello world !");
// janeiro
// a gente armazena em variaveis valores
salario1 = 3000;
aluguel1 = 1000;
contaDeAgua1 = 200;
contaDeLuz1 = 100;
internet1 = 100;
transporte1 = 300;
lazer1 = 300;
alimentacao1 = 500;
saldo1 =
  salario1 -
  aluguel1 -
  contaDeAgua1 -
  contaDeLuz1 -
  internet1 -
  transporte1 -
  lazer1 -
  alimentacao1;
console.log("janeiro");
console.log(saldo1);
// a gente faz com que faça checagem onde retorna verdareiro ou falso
// Boolean
estaNegativo1 = saldo1 < 0;
if (estaNegativo1) {
  console.log("juros de janeiro");
  juros1 = saldo1 * 0.1;
  console.log(juros1);
  saldo1 = saldo1 + juros1;
} else {
  console.log("rendimentos de janeiro");
  rendimentos1 = saldo1 * 0.005;
  console.log(rendimentos1);
  saldo1 = saldo1 + rendimentos1;
}
console.log(saldo1);
// ??? avaliar se tem juros ou rendimento
// fevereiro
salario2 = 3000;
aluguel2 = 1200;
contaDeAgua2 = 250;
contaDeLuz2 = 100;
internet2 = 100;
transporte2 = 500;
lazer2 = 0;
alimentacao2 = 1000;
saldo2 =
  salario2 -
  aluguel2 -
  contaDeAgua2 -
  contaDeLuz2 -
  internet2 -
  transporte2 -
  lazer2 -
  alimentacao2;
console.log("fevereiro");
console.log(saldo2);
// Boolean
estaNegativo2 = saldo2 < 0;
if (estaNegativo2) {
  console.log("juros de fevereiro");
  juros2 = saldo2 * 0.1;
  console.log(juros2);
  saldo2 = saldo2 + juros2;
} else {
  console.log("rendimentos de fevereiro");
  rendimentos2 = saldo2 * 0.005;
  saldo2 = saldo2 + rendimentos2;
}
console.log(saldo2);
// ??? avaliar se tem juros ou rendimento
acumuladoAno = saldo1 + saldo2;
console.log("ano");
console.log(acumuladoAno);