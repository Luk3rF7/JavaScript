class Animal {
  constructor(nome) {
    this.nome = nome
  }
  setNome(nome) {
    this.nome = nome
  }
  getNome() {
    return this.nome
  }

  mover(distancia) {
    console.log(`${this.nome} se moveu ${distancia} distancia`)
  }
}

const animal = new Animal("cachorro")
animal.mover(50);

class Snake extends Animal {
  constructor(nome) {
    super(nome);
  }
  mover(distancia) {
    console.log(`rastejando...`);
    super.mover(distancia);
  }
}
const cobra = new Snake("python")

cobra.mover(50);
class Cavalo extends Animal {
  constructor(nome) {
    super(nome);
  }
  mover(distancia) {
    console.log(`Calvagando...`);
    super.mover(distancia);
  }
}
const cavalo = new Cavalo("azalao")

cavalo.mover(50);