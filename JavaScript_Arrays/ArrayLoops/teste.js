const arr = []

function adicionandoArr(arr, pos, item) {
  return arr[pos] = item
}

function modificando(arr, pos, index, item) {
  console.log('item atual :', arr);

  return arr[pos][index] = item;
}

testando(arr, 0, 'um')
testando(arr, 1, 2)
testando(arr, 2, 3)
testando(arr, 4, 'testando')
testando(arr, 3, true)
modificando(arr, 0, 0, 'Dois')
