const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const arr2 = [2, 5, 6, 4, 1, 7, 3, 54, 1,]
const search = num => {
  // Usaremos três ponteiros.
  // Um no início do array, um no final e outro no meio.
  let start = 0
  let end = arr.length - 1
  let middle = Math.floor((start + end) / 2)

  // Enquanto não encontramos o número, 
  // e o ponteiro inicial for igual ou menor ao ponteiro final
  while (arr[middle] !== num && start <= end) {
    // Se o número desejado for menor que o meio, 
    // descartamos a metade maior do array
    if (num < arr[middle]) end = middle - 1
    // Se o número desejado for maior que o meio,
    //  descartamos a metade menor do array
    else start = middle + 1
    // Recalculamos o valor do meio
    middle = Math.floor((start + end) / 2)
  }
  // Se saírmos do laço, significa que encontramos o 
  // valor ou que o array não pode mais ser dividido
  return arr[middle] === num ? middle : -1
}

console.log(search(6)) // 5
console.log(search(11)) // -1