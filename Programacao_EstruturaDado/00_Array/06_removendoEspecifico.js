const elem = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// removendo com splice :
const removidoComSplice = elem.splice(3, 3);

console.log(elem)
console.log(removidoComSplice);

const inserirComSlice = elem.splice(3,3,removidoComSplice);

console.log(inserirComSlice);
