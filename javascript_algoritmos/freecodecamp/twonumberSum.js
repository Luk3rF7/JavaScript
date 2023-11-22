function twoNumberSum(array, targetSum) {
  let result = []
  // Usamos um laço aninhado para testar todas as combinações possíveis 
  // de números dentro do array
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      // Se encontrarmos a combinação certa, colocamos ambos os
      //  valores no array result e o retornamos
      if (array[i] + array[j] === targetSum) {
        result.push(array[i])
        result.push(array[j])
        return result
      }
    }
  }
  // Retorna o array result
  return result
}

console.log(twoNumberSum([9, 1, 3, 4, 5], 6)) // [1,5]
console.log(twoNumberSum([1, 2, 3, 4, 5], 10)) // []

//segunda solucao : 

function twoNumberSum2(array, targetSum) {
  // Ordenar o array e fazer a iteração por ele com um ponteiro em cada extremo
  // A cada iteração, verificar se a soma dos dois ponteiros é maior ou menor 
  // que o alvo
  // Se for maior, mover o ponteiro da direita para a esquerda
  // Se for menor, mover o ponteiro da esquerda para a direita
  let sortedArray = array.sort((a, b) => a - b)
  let leftLimit = 0
  let rightLimit = sortedArray.length - 1

  while (leftLimit < rightLimit) {
    const currentSum = sortedArray[leftLimit] + sortedArray[rightLimit]

    if (currentSum === targetSum)
      return [sortedArray[leftLimit], sortedArray[rightLimit]]
    else currentSum < targetSum ? leftLimit++ : rightLimit--
  }

  return []
}

console.log(twoNumberSum2([9, 1, 3, 4, 5], 6)) // [1,5]
console.log(twoNumberSum2([1, 2, 3, 4, 5], 10)) // []

//terceira 
function twoNumberSum3(array, targetSum) {
  // Iterar sobre o array uma vez e a cada iteração
  // Verificar se o número que você precisa para chegar ao destino existe no array
  // Se existir, retornar seu índice e o índice de número atual
  let result = []

  for (let i = 0; i < array.length; i++) {
    let desiredNumber = targetSum - array[i]
    if (array.indexOf(desiredNumber) !== -1 &&
      array.indexOf(desiredNumber) !== i) {
      result.push(array[i])
      result.push(array[array.indexOf(desiredNumber)])
      break
    }
  }

  return result
}

console.log(twoNumberSum3([9, 1, 3, 4, 5], 6)) // [1,5]
console.log(twoNumberSum3([1, 2, 3, 4, 5], 10)) // []