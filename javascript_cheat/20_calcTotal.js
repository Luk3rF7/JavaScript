const valores = [12, 25, 26, 35]

let total = 0
for (let num of valores) {
  total += num
}

valores.forEach((num) => {
  total += num
})

valores.reduce((acc, curr) => {
  acc + curr
})