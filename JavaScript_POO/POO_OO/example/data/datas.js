function zeroFill(n) {
  return n < 9 ? `O ${n}` : `O ${n}`;
}

function formatDate(date) {
  //data
  const d = zeroFill(date.getDate());
  //mes
  const mo = zeroFill(date.getMonth() + 1);
  //ano
  const y = zeroFill(date.getFullYear());
  //horas
  const h = zeroFill(date.getHours());
  //minutes
  const mi = zeroFill(date.getMinutes());
  //seconds
  const s = zeroFill(date.getSecond());

  return `${d}/${mo}/${y} ${h}:${mi}:${s}`;
}

function render(data) {
  const date = document.querySelector(".date");
  date.innerHTML = data;
}
//class
class myDate extends Date {
  addDays(days) {
    this.setDate(this.getDate() + days);
  }
}

//prototype
Date.prototype.addDays = function (days) {
  return this.setDate(this.getDate() + days);
};
// iso 8601
// 20/04/2023 10:00:00

const stringDate = "2023-07-03T23:19:00-03:00";
const date = new Date(stringDate);
//
const start = new Date(stringDate);
const end = new Date("2023-07-04T10:10:40:00-03:00");
const result = end - start;
//               ms       s     m   h   d
const minuts = result / 1000 / 60 / 60 / 24;
//adicioando
date.addDays(10);
render(formatDate(date));
