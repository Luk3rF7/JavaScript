class Parafuso {
  constructor() {
    if (this.constructor === Parafuso)
      throw new Error("Classe abstrata não pode ser instanciada");
  }
  get tipo() {
    throw new Error('Metodo "get tipo()" preciser ser implementado');
  }
}

class Fenda extends Parafuso {
  constructor() {
    super();
  }
  get tipo() {
    return "fenda";
  }
}

class Philips extends Parafuso {
  constructor() {
    super();
  }
  get tipo() {
    return "philips";
  }
}

class Allen extends Parafuso {}

//criar e usar
new Parafuso(); // 'Classe abstrata nao pode ser instanciada
let fenda = new Fenda();
let philips = new Philips();
let allen = new Allen();

console.log(fenda.tipo, philips.tipo);
console.log(allen.tipo); // "metodo 'get tipo()' prec"
