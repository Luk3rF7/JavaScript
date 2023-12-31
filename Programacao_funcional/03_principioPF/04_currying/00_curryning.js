//
const p1 = {
  nome: 'A',
  preco: 14.99,
  desc: 0.25
}

// console.log(textoComTamanhoEntre(4, 255, 'Nome inválido', p1.nome))
console.log(txtComTamanhoEntre(4)(255)('Nome inválido')(p1.nome))

// vantagem de user currying :
// posso passar para variaveis e redefinir validacao ou argm
const forcaTamanhoPadrao = txtComTamanhoEntre(4)(255);
const forcaNomePadrao = forcaTamanhoPadrao('Nome do produto inválido!')

console.log(forcaNomePadrao(p1.nome));
// ! Sem Currying
function textoComTamanhoEntre(min, max, erro, text) {
  const tamanho = (text || '').trim().length;

  if (tamanho < min || tamanho > max) {
    throw erro
  }
}

//! Com curryng

function txtComTamanhoEntre(min) {
  return function (max) {
    return function (erro) {
      return function (texto) {
        const tamanho = (texto || '').trim().length;

        if (tamanho < min || tamanho > max) {
          return erro
        }
      }
    }
  }
}

