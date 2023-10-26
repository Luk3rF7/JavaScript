const arr = [1, 2, 3]

arr.map(n => n * 2) // [2,4,6]
arr.filter(n => n <= 2) // [1,2]
arr.find(n => n > 1) // [1]
arr.reduce((p, m) => p + m)
