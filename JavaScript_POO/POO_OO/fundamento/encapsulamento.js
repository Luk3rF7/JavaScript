let altura = 50;
let largura = 60;

function calcularArea() {
  return altura * largura;
}

let area = calcularArea();

// Orientado a Objeto
class Poligono {
  constructor(altura, largura) {
    this.altura = altura;
    this.largura = largura;
  }

  get area() {
    return this.#calcularArea();
  }

  #calcularArea() {
    //com # não sera visivel la fora
    return this.altura * this.largura;
  }
}

let poligono = new Poligono(50, 60);
console.log(poligono.calcularArea);
