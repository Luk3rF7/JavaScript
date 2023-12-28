// * Arrow function :

const felizNatal = () => console.log("Feliz Natal!");

felizNatal();

const saudacao = (nome) => `Fala ${nome} !!!`

const somar = (...array) => {
  let total = 0;
  for (let n of array) {
    total += n
  }
  return total
}

console.log(somar(1, 2, 5, 6, 4, 8, 7, 9));



