// Como funciona por debaixo do map :
Array.prototype.myMap = function (fn) {
  const mapped = [];
  for (let i = 0; i < this.length; i++) {
    const result = fn(this[i], i, this);
    mapped.push(result);
  }
  return mapped;
}

const num = [1, 2, 3];

const test = num.myMap((num, index, arr) => {
  console.log("Array: ", arr);
  console.log('index do myMap : ', index,);
  console.log('dobro do valor: ', num * 2);
})

test