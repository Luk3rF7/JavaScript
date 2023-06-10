//função contrutora -> objetos
// função fabrica -> objetos
//construtor  -> Pessoa (new)

function Pessoa(nome,sobrenome){
    //privada
    const ID = 123456;

    const metodoInterno = function(){

    };
    //atributos ou metodos publicos
    this.nome = nome;
    this.sobrenome =sobrenome;

    this.metodo = ()=>{
        console.log(this.nome + ' Sou um metodo')
    };
}

const p1 = new Pessoa('Lucas', 'Felipe')
const p2 = new Pessoa('Vitoria','neves')

console.log(p1.nome);
console.log(p2.nome);
p1.metodo();