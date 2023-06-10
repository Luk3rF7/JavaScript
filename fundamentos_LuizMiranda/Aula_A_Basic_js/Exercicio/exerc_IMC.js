/* 
Lucas felipe tem 28 anos,pesa 84kg tem 1.8 de altura e seu imc e de 25.925925925959
lucas felipe nasceu em :
*/
const nome = "Lucas"
const lastName = "Felipe"
let idade = 28
let peso = 84
let alturaEmCm = 1.8
let anoNascimento;
let imc; // peso / (altura * altura)

imc = peso / (alturaEmCm * alturaEmCm)
anoNascimento = (idade - 2023);
console.log(nome,lastName,'tem',idade,' anos,pesa',peso,'Kg')
console.log('tem',altura,' de altura e seu imc é de',imc)
console.log(nome, anoNascimento)