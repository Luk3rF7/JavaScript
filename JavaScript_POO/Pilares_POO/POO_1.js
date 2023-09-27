// Programação Orientado a Objeto :
/* 
    todo 4 Pilares

    1 - Abstração
    2 - Encapsulamento
    3 - polimorfismo
    4 - Herança
*/

class NameClass {
    //nome metodo: 
    nomeMetodo() {
        this.atributo = "valor do atributo"
        // metodo pode receber params ou não
        return this.atributo;
    }

    // metodo com params
    outroMetodo(first, second) {
        //crio atributo que vai receber params:
        this.primeiroAtributo = first;
        this.segundoAtributo = second;

        return `Valor Atributo 1 é : ${this.primeiroAtributo} e
         valor do Atributo 2 é : ${this.segundoAtributo}`

    }
}

const objClass = new NameClass();
// quando ha classe para utilizar metodo passamos seguinte:

// instancia e passamo valor para :
objClass.atributo = 'valor do atributo'

console.log(objClass.nomeMetodo());
console.log(objClass.atributo);
console.log(objClass.outroMetodo('valor1', 2));

