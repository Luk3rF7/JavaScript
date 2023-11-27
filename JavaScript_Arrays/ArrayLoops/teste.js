const arr = []

function adicionandoArr(arr, pos, item) {
  return arr[pos] = item
}

function modificando(arr, pos, index, item) {
  console.log('item atual :', arr);

  return arr[pos][index] = item;
}

adicionandoArr(arr, 0, 'um')
adicionandoArr(arr, 1, 2)
adicionandoArr(arr, 2, 3)
adicionandoArr(arr, 4, 'adicionandoArr')
adicionandoArr(arr, 3, true)
modificando(arr, 0, 0, 'Dois')
