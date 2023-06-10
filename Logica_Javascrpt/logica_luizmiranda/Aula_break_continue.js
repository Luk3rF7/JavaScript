//break funciona em todo laços FOR/else if,switch,while e do while

const numeros = [1,2,3,4,5,6,7,8,9,10]

for(let numero of numeros){
//usando outro modos:
// for(let i = 0; i < numeros.length; i++)
//for(let num in numeros)

    if(numero === 2 ){
        console.log('start...')
        console.log('Pulei o numero: 2')
        continue;
    }if (numero == 7){
        console.log('achou 7 !! saindo...')
        break;
    }
        console.log(numero)
    }
   
    console.log('usando while...DoWhile') 
    // usando metodo while do
let i = 0;
while(i < numeros.length){
    let numero = numeros[i];
    if(numero === 3){
        console.log('start...')
        console.log('Pulei o numero: 3')
        i++
        continue;
    }
    console.log(numero)
    console.log('em busca do numero 9')
    if(numero === 9){
        console.log('achamos o numero 9 saindo...')
        i++
        break;
    }
i++
}
