const arr = [3, 2, 1, 4, 6, 5, 7, 9, 8, 10]

const bubbleSort = arr => {
  // Definir uma variável como flag
  let noSwaps

  // Fazer um laço aninhado
  // com um ponteiro iterando da direita para a esquerda
  for (let i = arr.length; i > 0; i--) {
    noSwaps = true
    // e outro iterando da esquerda para a direita
    for (let j = 0; j < i - 1; j++) {
      // Comparar os dois ponteiros
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j]
        arr[j] = arr[j + 1]
        arr[j + 1] = temp
        noSwaps = false
      }
    }
    if (noSwaps) break
  }
}

bubbleSort(arr)
console.log(arr) // [1,2,3,4,5,6,7,8,9,10]