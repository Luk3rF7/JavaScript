function Counter() {
  this.count = 0;
  let self = this;

  return {
    increase: function () {
      self.count++
    },
    current: function () {
      return self.count;
    },
    reset: function () {
      return self.count = 0
    }
  }
}

let counter = new Counter()
let num = [1, 2, 3]
let sum = 0

num.forEach(function (e) {
  sum += e;
  this.increase();
}, counter)

console.log(sum)
console.log(counter.current())