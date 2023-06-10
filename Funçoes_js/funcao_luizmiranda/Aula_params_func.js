// arguments que sustenta todo os argmentos enviado
function funcao(){
 let total = 0;
 for(let argumento of arguments){
    total += argumento;
 }
 console.log(total)
}

funcao(1,2,3,4) // argumento dentro do params
console.log('funcao 2')

function funcao2(a,b,c,d,e,f){
    console.log(a,b,c,d,e,f)
    console.log(a+b)
}

funcao2(1,2,3) // argumento dentro do params

//destruturção
                                            // modo Arrays
function funcao3({nome,sobrenome,idade}){  //([valor1,valor2,valor3])
    console.log(nome , sobrenome, idade)  //(valor1,valor2,valor3)
}
funcao3({nome:'Lucas',sobrenome: 'felipe',idade: '28'}) //(['Lucas', 'felipe', '28'])
console.log('funcao conta...')

function conta( operador, acumulador, ...numeros){
        for(let numero of numeros){
           if(operador === '+') acumulador += numero;
           if(operador === '-') acumulador -= numero;
           if(operador === '/') acumulador /= numero;
           if(operador === '*') acumulador *= numero;
        }
        console.log(acumulador)
}

conta('-',200,20,30,40,50)