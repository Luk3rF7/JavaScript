//factory function (função fabrica)
//constructor function (função construtora)
function criaPessoa(nome,sobrenome,altura,peso){
    return { 
        //this - criar uma funcao /quando funcao esta
        // dentro de uma funcao chamos de metodo
        nome,
        sobrenome,
        
        //getter
         get nomeCompleto(){
        return `${this.nome} ${this.sobrenome}`
        },
        //recebendo valor - setter
        set nomeCompleto(valor){
            valor =valor.split(' ');
            this.nome = valor.shift();
            this.sobrenome = valor.join(' ');
        },
        //exemplo de func metodo: posso add params dentro
        fala: function(assunto = 'falando sobre nada'){
            return `${this.nome} está falando ${assunto}...testando sabe peso com this ${this.peso}`
        },
        altura: altura,
        peso: peso,
       get imc(){ //adicionando get ele finge ser atributo getter
            const indice =this.peso / (this.altura ** 2);
            return indice.toFixed(2);
    }
};
}
const p1 = criaPessoa('Lucas','Felipe', 1.8,80);
const p2 = criaPessoa('victoria','felipe',1.60,72); // sempre this vai quem chamar o objeto
p1.nomeCompleto = 'Maria Felipe';
console.log(p1.nome)
console.log(p1.sobrenome)
console.log(p1.fala())


// p1.nomeCompleto = 'Maria de Fatima Felipe de souza'
// console.log(p1.nome)
// console.log(p1.sobrenome)
// console.log(p1.imc)
// console.log(p1.fala('Aprendendo sobre Js'))
// console.log(p2.imc)
// console.log(p2.fala('Aprendendo sobre Js'))
// console.log(p1.nomeCompleto);