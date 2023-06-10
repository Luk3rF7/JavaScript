function rand(min= 0,max= 3){
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max -min) + min);
}

function aguarde(msg,tempo){
    return new Promise((resolve,reject) =>{
        setTimeout(() => {
            if(typeof msg !== 'string'){
                reject('Temos um erro!');
                return
            }

            resolve(msg.toUpperCase() + '- Passei na promise');
            return
        },tempo)
    });
}
async function executar(){
   try{
    const fase1 = await aguarde('fase1',rand());
    console.log(fase1)
    const fase2 = await aguarde('fase2',rand());
    console.log(fase2)
    const fase3 = await aguarde('fase3',rand());
    console.log(fase3)
    console.log('Terminamos na fase:',fase3);
   }catch(e){
    console.log(e);
   }
}

executar();

const teste2 = aguarde('teste',5000)
    console.log(teste2)

/* 
pending = > pendente
fullfilled -> resolvida
reject - rejeitada
*/



// Promise pre
// aguarde('Frase 1',rand())
// .then(valor => {
//     console.log(valor)
//     //poderia ter uma função
//     return aguarde('Fase 2',rand())
// })
// .then(fase => {
//     console.log(fase);
//     return aguarde('Fase 3',rand())
// })
// .then(fase => {
//     console.log(fase);
//     return fase
// })
// .then(fase => {
//     console.log('Terminamos na fase', fase)
// })
// .catch(e => console.log(e))