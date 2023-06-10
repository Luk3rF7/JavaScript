class DispositivoEletronico{
    constructor(nome){
        this.nome = nome;
        this.ligado = false;
    }

    ligar(){
        if(this.ligado){
            console.log(this.nome + 'já ligado');
            return
        }
        this.ligado = true;
    }

    desligar(){
        if(!this.ligado){
            console.log(this.nome + 'já desligo')
        }
    }
}

class Smartphone extends DispositivoEletronico {
    constructor(nome,cor,modelo){
         super(nome)

        this.cor = cor;
        this.modelo = modelo;
    }
}

class Tablet extends DispositivoEletronico {
    constructor(nome, temWifi){
        super(nome)
        this.temWifi = temWifi;
    }

    ligar(){
        console.log('Olha,você alterou o método ligar.')
    }
    falaOi(){
        console.log('Oi...estou ligado')
    }
}
const s1 = new Smartphone('Sansung','red','Galaxy A10');
const t1 = new Tablet('Ipad',true)
console.log(s1);
console.log(t1.ligado);
t1.falaOi();