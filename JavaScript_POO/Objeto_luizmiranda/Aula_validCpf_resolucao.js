///validando cpf - constructor

function ValidaCPF(cpfEnviado){
 Object.defineProperty(this,'cpfLimpo',{
        get:function(){
            return cpfEnviado.replace(/\D+/g,'');
        }
 });
}
//validação do cpf
ValidaCPF.prototype.valida = function(){
    if(typeof this.cpfLimpo === 'undefined')return false;
    if(this.cpfLimpo.length !== 11)return false;

    const cpfParcial = this.cpfLimpo.slice(0, -2);
    const digito1 = this.criaDigito(cpfParcial);
    const digito2 = this.criaDigito(cpfParcial + digito1);
    const novoCpf = cpfParcial + digito1 + digito2;
    return novoCpf === this.cpfLimpo;
}

//digitar cpf
ValidaCPF.prototype.criaDigito = function(cpfParcial){
    const cpfArray = Array.from(cpfParcial);
    
  
    //parte complexa -reduce -
    let regressivo = cpfArray.length+ 1;
    const total = cpfArray.reduce((ac,val)=>{
        ac += (ac * Number(val))
        regressivo--;
        return ac;
    }, 0);

    const digito = 11 - (total % 11);
    return digito > 9 ? '0' : String(digito);

}
//sequencia

ValidaCPF.prototype.isSequencia = function(){ 
    const sequencia = this.cpfLimpo[0].repeat(11);
    return

}

const cpf = new ValidaCPF('705.484.450-52');
console.log(cpf)
cpf.valida();
