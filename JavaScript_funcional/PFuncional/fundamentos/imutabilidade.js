const casa1 = {
  cor: 'Amarela',
  logradouro: 'Av.Brasil',
  numero: 20,
};
// errado 
const casa2 = casa1;
casa2.numero = 30;
// certo 
const casa3 = {
  ...casa1,
  numero: 48,
}
console.log(casa1)
console.log(casa2)
console.log(casa3)
// array tbm funciona

const jose = {
  name: "jose",
  idade: 18,
  enderecos: [{ logradouro: "Av. Brasil", numero: 10 }]
};
//DEEP COPY
const joao = {
  ...jose,
  name: "joao"
};

joao.enderecos = [
  ...jose.enderecos,
  {
    logradouro: "Av. Santa Catarina",
    numero: 10
  }
];

console.log(jose, joao);