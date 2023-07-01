// Matrix 3x3x3 - Cube

const matrix3x3x3 = [];
for (let i = 0; i < 3; i++) {
  matrix3x3x3[i] = [];
  for (let j = 0; j < 3; j++) {
    matrix3x3x3[i][j] = [];
    for (let z = 0; z < 3; z++) {
      matrix3x3x3[i][j][z] = i + j + z;
    }
  }
}

for (let i = 0; i < matrix3x3x3.length; i++) {
  for (let j = 0; j < matrix3x3x3[i].length; j++) {
    for (let z = 0; z < matrix3x3x3[i][j].length; z++) {
      console.log(matrix3x3x3[i][j][z]);
    }
  }
}

// user-friendly-output
const matrix3x3x3Output = [];
for (let i = 0; i < 3; i++) {
  matrix3x3x3Output[i] = [];
  for (let j = 0; j < 3; j++) {
    matrix3x3x3Output[i][j] = `[${matrix3x3x3[i][j].join(", ")}]`;
  }
}
console.log("matrix3x3x3 three-dimensional array:");
console.table(matrix3x3x3Output);
