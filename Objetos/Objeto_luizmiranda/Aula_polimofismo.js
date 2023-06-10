function Conta(agencia,conta,saldo){
    this.agencia = agencia;
    this.conta = conta;
    this.saldo = saldo;

}
function contaCorrente(agencia,conta,saldo,limite){
    Conta.call(this,agencia,conta,saldo);
    this.limite = limite;
}

//metodos prototypes
Conta.prototype.sacar = function(valor){
    if(this.saldo < valor) {
        console.log(`Saldo insuficiente ${this.saldo}`)
        this.verSaldo()
        return
    }
    this.saldo  -= valor;
    this.verSaldo();
}

Conta.prototype.depositar = function(valor){
    this.saldo += valor;
    this.verSaldo()
}

Conta.prototype.verSaldo = function(){
    console.log(
        `Ag/c: ${this.agencia}/${this.conta} |` +
        `Saldo: R$ ${this.saldo.toFixed(2)}` 
        );
}
contaCorrente =  Object.create(Conta.prototype);
contaCorrente.prototype.constructor = contaCorrente;


const conta1 = new Conta(11,22,10);
conta1.depositar(20)
conta1.sacar(29)
conta1.sacar(1 )
conta1.sacar(1 )
console.log(conta1)