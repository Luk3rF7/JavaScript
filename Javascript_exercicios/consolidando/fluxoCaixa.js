let familia = {
  incomes: [2500, 3200, 250.43, 360.45],
  expenses: [320.34, 128.45, 176.87, 1450.0],
};

//função que vai soma para min
function sum(array) {
  let total = 0;
  //estrutura de repetição
  for (let value of array) {
    total += value;
  }
  return total;
}
function calculateBalance() {
  const calculateInconmes = sum(family.incomes);
  const calculateExpenses = sum(family.expenses);

  const total = calculateInconmes - calculateExpenses;

  const itsOK = total >= 0;
  let balanceText = "negativo";
  if (itsOK) {
    balanceText = "Positivo";
  }
  console.log(`Seu saldo é ${balanceText} : ${total.toFixed(2)}`);
}
