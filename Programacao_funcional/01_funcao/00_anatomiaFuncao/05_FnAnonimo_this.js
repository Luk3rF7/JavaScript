// Arrow func this 

Array.prototype.ultimo = function () {
  console.log(this[this.length - 1]);
}
Array.prototype.adiciona = function (elem) {
  this.push(elem);
}
Array.prototype.first = function () {
  return console.log(this[0]);
}
const nums = [1, 2, 3,];
nums.adiciona(5);
nums.ultimo();
nums.first();