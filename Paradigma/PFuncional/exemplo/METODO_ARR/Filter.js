const produtos = [
  { id: 1, nome: "detergente", valor: 2.0, categoria: "limpeza" },
  { id: 2, nome: "amaciante", valor: 6.5, categoria: "limpeza" },
  { id: 3, nome: "pão", valor: 2.0, categoria: "alimento" },
  { id: 4, nome: "queijo", valor: 7.0, categoria: "alimento" },
  { id: 5, nome: "leite", valor: 2.2, categoria: "alimento" }
];

// Truthy mantém o item no Array
// Falsy remove o item do Array
const alimentos = produtos.filter(p => p.categoria === "alimento");

const numeros = [2, 4, 5, 6, 8, 9];

const par = numeros.filter((num) => num % 2 === 0);
console.log(par)
console.log(alimentos);