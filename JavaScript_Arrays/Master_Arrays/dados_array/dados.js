const aprovado = ['Agatha', 'Aldo', 'Daniel', 'Raquel']
const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']
const nums = [1, 2, 3, 4, 5, 6]
const alunos = [
  { nome: 'João', nota: 7.3, bolsista: false },
  { nome: 'Maria', nota: 9.2, bolsista: true },
  { nome: 'Pedro', nota: 9.8, bolsista: false },
  { nome: 'Ana', nota: 8.7, bolsista: true }
]
const escola = [{
  nome: 'Turma M1',
  alunos: [{
    nome: 'Gustavo',
    nota: 8.1
  }, {
    nome: 'Ana',
    nota: 9.3
  }]
}, {
  nome: 'Turma M2',
  alunos: [{
    nome: 'Rebeca',
    nota: 8.9
  }, {
    nome: 'Roberto',
    nota: 7.3
  }]
}]
const alunosObj = [
  { nome: 'João', nota: 7.9 },
  { nome: 'Maria', nota: 9.2 }
]
const produtos = [
  { nome: 'Notebook', preco: 2499, fragil: true },
  { nome: 'iPad Pro', preco: 4199, fragil: true },
  { nome: 'Copo de Vidro', preco: 12.49, fragil: true },
  { nome: 'Copo de Plástico', preco: 18.99, fragil: false }
]
const carrinho = [
  '{ "nome": "Borracha", "preco": 3.45 }',
  '{ "nome": "Caderno", "preco": 13.90 }',
  '{ "nome": "Kit de Lapis", "preco": 41.22 }',
  '{ "nome": "Caneta", "preco": 7.50 }'
]
const a1 = [10, 20, 30, 40, 50, 60]
const estoque = [
  { id: 1, preco: 10.0, quantidade: 1, stoque: 20 },
  { id: 2, preco: 15.0, quantidade: 0, stoque: 5 },
  { id: 1, preco: 30.0, quantidade: 1, stoque: 2 },
];
const vetor = [
  {
    id: 1,
    nome: 'Bicicleta',
    categoria: 1
  },
  {
    id: 2,
    nome: 'motoca',
    categoria: 2
  },
  {
    id: 3,
    nome: 'patins',
    categoria: 3
  },

]

const categorias = {
  1: 'Bicicleta',
  2: 'Motoca',
  3: 'Patins'
}

module.exports = {
  aprovado,
  pilotos,
  nums,
  alunos,
  escola,
  alunosObj,
  produtos,
  carrinho,
  a1,
  estoque,
  vetor,
  categorias
}