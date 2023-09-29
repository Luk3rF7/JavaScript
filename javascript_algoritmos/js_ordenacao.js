
function insertionSort(lista) {
  const tamanho = lista.length;
  for (let i = 0; i < tamanho; i++) {
    let elAtual = lista[i]
    let j = i - 1;

    while (j >= 0 && lista[j] > elAtual) {
      list[j + 1] = lista[j];
      j--
    }
  }
  lista[j + 1] = elAtual
}

insertionSort(5, 6, 2, 4, 8, 1);