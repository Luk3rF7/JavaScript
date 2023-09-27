// rest operator permite passa varios params passando array
const nums = [1, 2, 5, 6, 4]
function aumentar(...nums) {

  // instancia para guarda 
  let resultado = 0;
  // for tradicional
  for (let i = 0; i < nums.length; i++) {
    resultado += nums[i]
  }
  return resultado;
}

console.log(aumentar(1, 2, 3, 4, 5));


const objeto1 = {
  nome: 'usuario 1',
  idade: 18,
  sobrenome: "teste",

  nomeCompleto() {
    return this.nome + this.sobrenome;
  }
}

const objeto2 = {
  telefone: '91234-1234',
  ddd: '11',

  telefoneCompleto() {
    return `(${this.ddd})${this.telefone}`
  }
}
console.log(objeto2.telefoneCompleto());
console.log(objeto1.nomeCompleto());

// destructor 
const { nome, sobrenome } = objeto1;
const { telefone } = objeto2;
console.log(
  'destructor do obj 1:',
  nome,
  sobrenome,
  'destructor do obj 2',
  telefone);

//spread 

const fusaoObj = { ...objeto1, objeto2 }
console.log('spread : ', fusaoObj)