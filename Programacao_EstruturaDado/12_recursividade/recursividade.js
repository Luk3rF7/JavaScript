function fatorial(n) {
  if (n === 1) { // 6 e igual a 1? enquanto nao for ele entra na rec
    return n
  } else {
    return n * fatorial(n - 1) // ele vai diminui  6 - 1 = 5 ate chega no 1
  }
}

console.log(fatorial(5))