Object.prototype.attr0 = 'Z'
const avo = { attr1: "A"}
const pai =  {__proto__ : avo, attr2 : 'B'}
const filho =  {__proto__ : pai , attr3 : 'C'}

console.log(filho.attr0,filho.attr1,filho.attr2,filho.attr3)

console.log('Prototype')

const car = {
    velAtual : 0,
    velMax : 200,
    acelerarMais(delta){
        if(this.velAtual + delta <= this.velMax){
            this.velAtual += delta
        }else {
            this.velAtual = this.velMax
        }
    },
    status(){
        return `${this.velAtual} Km/h de ${this.velMax}  km/h`
    }
}

const ferrari ={
    modelo : 'F40',
    velMax: 324 // shadowing
}

const volvo = { 
    modelo: 'V40',
    status() {
        return `${this.modelo}: ${super.status()}`
    }
}
Object.setPrototypeOf(ferrari,car)
Object.setPrototypeOf(volvo,car)

console.log(ferrari)
console.log(volvo)

volvo.acelerarMais(100)
console.log(volvo.status())
volvo.acelerarMais(100)
console.log(volvo.status())