//if = se
//else = senao
//else if = senao se

if (true) {
  // code se for verdadeiro
} else {
  //code
}
//exemplo

let temp = 36.5;
let highTemp = temp >= 37.5;
let mediunTemp = temp < 37.5 && temp >= 37;

if (temp >= highTemp) {
  console.log("Febre");
} else if (mediunTemp) {
  console.log("febre moderada");
} else {
  console.log("Saudavel");
}
