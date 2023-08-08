// Exercicios de Fundamentos
//crie script que imprima ola

// Exercicios 1 : Olá mundo!
const init = "Olá, Mundo !"
log(init)
//Exercicio 2 : Conversão de tipos:
// converta o valor string "12345" em numero :
const stringNum = "123456"
const convertNum = Number(stringNum)
log(convertNum)

//Exercicio 3 : Manipulação de String
/* 
dados um string verifique a quantidade de caracteres: 
*/
const frase1 = "javaScript e incrivelmente top"
const qtdForStg = frase1.length;
const numForFrase = frase1.split(" ").length;

log(`quantidade de caracteres é : ${qtdForStg}`)
log(`quantidade de Palavra  é : ${numForFrase}`)
// Exercício 4: Loops e Arrays
// Crie um array com cinco nomes. Use um loop for para imprimir cada nome no console.

const nomes = ["Ana", "João", "Carlos", "Maria", "Beatriz"];
for (let i = 0; i < nomes.length; i++) {
  log(nomes[i]);
}

// Exercício 5: Funções, Strings e Math
// Crie uma função que aceita uma string representando um horário no formato de 24 horas (por exemplo, "14:30"). A função deve retornar uma string que converta o horário para o formato de 12 horas (por exemplo, "2:30 PM"). Use o objeto Math para auxiliar nesta conversão. Certifique-se de que sua função lida corretamente com horários na meia-noite e no meio-dia.

function converterHorario(horario24) {
  const [hora, minuto] = horario24.split(":");
  let hora12 = hora % 12 || 12;
  const periodo = hora < 12 ? "AM" : "PM";
  return `${hora12}:${minuto} ${periodo}`;
}

log(converterHorario("14:30")); // "2:30 PM"
log(converterHorario("00:00")); // "1
log(converterHorario("12:00")); // "12:00 PM"






function log(arg) {
  console.log(arg)
}

