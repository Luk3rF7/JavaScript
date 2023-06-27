class Veiculo {
  rodas = 4;
  //class pai
  mover(direcao) {}
  virar(direcao) {}
}

class Mtoto extends Veiculo {
  constructor() {
    //puxa atributos e metodos
    //da classe pai
    super();
    this.rodas = 2;
  }
}
