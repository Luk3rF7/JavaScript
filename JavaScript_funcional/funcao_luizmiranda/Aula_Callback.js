//função que gera numero aleatorio
function rand(min= 1000,max = 3000){
    //criando 
    const num = Math.random() * (max - min) + min;
    return Math.floor(num);
}

//function CB
function f1(callback){
    setTimeout(function(){ //outra funcao de callback
        console.log('f1')
        if(callback) callback();
    },rand())
}
function f2(callback){
    setTimeout(function(){
        console.log('f2')
        if(callback) callback();
    },rand())
}
function f3(callback){
   setTimeout(function(){
    console.log('f3');
    if(callback) callback();
   },rand())
}

f1(f1Callback);
function f1Callback(){
    f2(f2Callback);
} 
function f2Callback(){
    f3(f3Callback);
}
function f3Callback(){
    console.log('Olá munndo,mesmo modo da outra');
}


//callback hell -corrente-boneca russa
// f1(function(){
//     f2(function(){
//         f3(function(){
//             console.log('dentro da callback - Olá mundo')
//         });
//     });
// })
