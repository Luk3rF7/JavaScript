function teste(){
    console.log('teste');
}
class ControleRemoto {
    constructor(tv) {
        this.tv =tv;
        this.volume =0;
    }
//Método instância 
    aumentarVolume() {
        this.volume += 2;
    }
    diminuiVolume() {
        this.volume -= 2;
    }
    //método de instância
   static soma(x,y){
 return x + y
    }
   
}

const controle1 = new ControleRemoto('Lg')
controle1.aumentarVolume()
controle1.aumentarVolume()
controle1.aumentarVolume()
controle1.aumentarVolume()
console.log(controle1)

console.log(ControleRemoto.soma(2,4))