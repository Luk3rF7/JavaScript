class Lancamento {
    constructor( nome= 'Generico',valor = 0) {
            this.nome = nome
            this.valor = valor
    }
}


class CicloFinanceiro {
    constructor(mes,ano){
        this.mes = mes
        this.ano = ano
        this.Lancamento = []
    }

    addLancamento(...lancamento){
        lancamento.forEach(l => this.Lancamento.push(l))
    }

    sumario(){
        let valorConsolidado = 0 
        this.lancamento.forEach(l =>{
            valorConsolidado += l.valor
        })
        return valorConsolidado
    }
}