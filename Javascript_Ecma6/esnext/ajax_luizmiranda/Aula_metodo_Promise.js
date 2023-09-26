function rand(min,max){
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min)
}

function esperaAi(msg,tempo){
    return new Promise((resolve,reject)=>{
       
        setTimeout(()=> {
            if(typeof msg !== 'string'){
                reject('Caiu no Erro')
                return;
            }
            resolve(msg.toUpperCase() + ' - passei na Promisse')
            return;
        },tempo);
    })
}
const promises =[
    esperaAi('Promise 1',rand(1,5)),
    esperaAi('promise 2',rand(1,5)),
    esperaAi('promise 3',rand(1,5)),
];
function baixarPagina(){
    const emCache = true;

    if(emCache){
        return Promise.resolve('Página em cache');
    }else{
        return esperaAi('Baixei a página',3000)
    }
}


baixarPagina()
.then(dadosPagina => {
    console.log(dadosPagina)
})
.catch(e => consol.elog(e))


/* promise.race
Promise.race(promises)
.then(function(valor){
    console.log(valor);
})
.catch(function(erro){
    console.log(erro);
})  */

/* Promisse.all
Promise.all(promises).then(function(valor){
    console.log(valor);
}).catch(function(erro){
    console.log(erro);
})
*/
// promise.reject

// promise.resolve






