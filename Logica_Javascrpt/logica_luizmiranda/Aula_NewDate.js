// const tresHoras = 60 * 60 * 3 * 1000;
// const umDia = 60 * 60 * 24 * 1000;
// const data = new Date(0 + tresHoras);
// const data = new DataTransfer(2023,3); a,m,d,h,m,s,ms
//  const data1 = new Date(2023,3,20,15,14,27)
// const data1 = new Date("2023-03-31 04:33:50");
// console.log("dia", data.getDate());
// console.log("mês", data.getMonth());
// console.log("ano", data.getFullYear());
// console.log("Hora", data.getHours());
// console.log("min", data.getMinutes());
// console.log("seg", data.getSeconds());
// console.log("ms", data.getMilliseconds());
// console.log("dia da semana", data.getDay());

// console.log(data.toString());
function zeroAEsquerda(num){
    return num >= 10 ? num :`0${num}`
}

function formatData(data) {
  const dia = zeroAEsquerda(data.getDate());
  const mes = zeroAEsquerda(data.getMonth()) + 1;
  const ano = zeroAEsquerda(data.getFullYear());
  const hora = zeroAEsquerda(data.getHours());
  const min = zeroAEsquerda(data.getMinutes());
  const sec = zeroAEsquerda(data.getSeconds());
  const ms = zeroAEsquerda(data.getMilliseconds());
  const diaSemana = zeroAEsquerda(data.getDay());

  return `
 Data: ${dia}/${mes}/${ano}
  Horas: ${hora}:${min}:${sec}
  `
}

const data = new Date();
const dataBrasil = formatData(data);
console.log(dataBrasil);
