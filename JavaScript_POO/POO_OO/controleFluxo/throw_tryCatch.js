//throw = disparar
function sayMyName(name = "") {
  if (name === "") {
    throw new Error("Nome e necessarios");
  }
  console.log("Concluido, passou do error");
}
// try e lançar catch = pegar
try {
  sayMyName("Lucas");
} catch (e) {
  console.log(e);
}
