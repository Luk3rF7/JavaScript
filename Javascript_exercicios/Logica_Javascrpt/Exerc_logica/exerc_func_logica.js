//1 - Escreva uma função que recebe 2 numero e retorni o maior deles
//usando arrow function
const max2 = (x,y)=> {return x > y ? x : y}
console.log(max2(100,70))

function Maximo(a,b){return Math.max(a,b);}
// usando tenario -> return x >y ? x : y

console.log(`O valor Maximo é ${Maximo(100,250)}`)

console.log('Solução feita pelo professor')

//utilizando if/else
function max(x,y){
    if(x > y){
        return console.log(`Valor maximo é:${x}`);
    }else{
        return y;
    }
}
//utilizando variavel var valorMax = max()
console.log(max(100,250))

//