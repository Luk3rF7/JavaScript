const names = ["L", "b", "C", "d"];
const id = [1, 2, 3, 4];

const nameId = [];
nameId[0] = ["L", "b", "C", "d"];
nameId[1] = [1, 2, 3, 4];

function matrixBi(matrix) {
  //linha
  for (let l = 0; l < matrix.length; l++) {
    //coluna
    for (let c = 0; c < matrix[l].length; c++) {
      console.log(matrix[l][c]);
    }
  }
}
matrixBi(nameId);
