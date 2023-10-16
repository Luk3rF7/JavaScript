// const arr = ["a", "b", "c"];

// for (let i = 0; i < arr.length; i++) {
//   console.log('dentro do array : ', arr[i])
// }

// // array dentro de array:

// const matrix = [
//   [1, 2, 3],
//   ["a", "b", "c"],
//   [4, 5, 6]
// ];

// for (let k = 0; k < matrix.length; k++) {
//   for (let j = 0; j < matrix[k].length; j++) {
//     console.log(matrix[k][j])
//   }
// }

//pegando linha e coluna tabela:
const tr = []
tr[0] = ['.', '.', '.']
tr[1] = ['.', '.', '.']
tr[2] = ['.', '*', '.']
tr[3] = ['.', '.', '.']

console.log(tr);
function addMatrix(arr, index, pos, item) {
  return arr[index][pos] = item
}
addMatrix(tr, 1, 1, 'lucas')
addMatrix(tr, 3, 2, 'vicky')
addMatrix(tr, 3, 1, 'mary')

console.log(tr)
// const tr = document.querySelector("tr");
