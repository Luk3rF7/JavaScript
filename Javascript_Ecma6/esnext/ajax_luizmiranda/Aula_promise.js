function rand(min,max){
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min)
}

function esperaAi(msg,tempo,){
    //contrutor da funcao promise
    return new Promise((resolve,reject) =>{
        if(!typeof msg !== "string") reject('Bad value')
        setTimeout(() => {
            resolve(msg);
        },tempo )
    } );
}

esperaAi('conexão com o BD',rand(1,3))
.then(resposta => {
    console.log(resposta);
    return esperaAi(222,rand(1,3))
})
.then(resposta => {
    console.log(resposta)
    return esperaAi('Tratando dado da base', rand(1,3))
}).then(resposta =>{
    console.log(resposta)
}).then(()=> {
    console.log('exibido dados da tela')
})
.catch(e => {
    console.log('Erro', e);
});
console.log('Isso aqui será exibido antes de qualquer  promisse!')




