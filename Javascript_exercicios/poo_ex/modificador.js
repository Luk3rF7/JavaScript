function fnCapitalizador(vetor) {
  let modificador = []

  for (let i = 0; i < vetor.length; i++) {

    let letraInicial = vetor[i].charAt(0).toUpperCase();
    let resto = vetor[i].slice(1);
    let result = letraInicial + resto;

    modificador[i] = result

  }
  return modificador;
}
function fnCapitalizarNovo(colecao, atributo) {
  console.log(typeof colecao)
  if (typeof colecao[0] === 'object') {

    const result = colecao.map((obj) => {
      let letraInicial =
        obj[atributo].charAt(0).toUpperCase();

      let resto = obj[atributo].slice(1)
      obj[atributo] = letraInicial + resto

      return obj;
    })
    return result;
  }
}

function fnOrdenar(vetor) {
  return vetor.sort(function (a, b) {
    return a.localCompare(b);
  })
}

function fnCaixaAlta(vetor) {
  var modificador = []
  for (let i = 0; i < vetor.length; i++) {
    modificador[i] = vetor[i].toUpperCase()
  }
  return modificador
}

export default {
  fnCaixaAlta,
  fnCapitalizador,
  fnCapitalizarNovo,
  fnOrdenar
}