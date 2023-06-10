//função que mostra hora atual 
function mostraHora(){
    let data = new Date()
    return data.toLocaleTimeString('pt-BR',{
        hour:'2-digit',
        minute:'2-digit',
        seconds:'2-digit',
        hour12:false
    })
}
    //funcao para interval
// function funcInterval(){
//     console.log(mostraHora())}

// setInterval(funcInterval,1000)

//funcao anonima

const timer = setInterval(function(){
    console.log(mostraHora())
}, 1000)
setTimeout(function(){
    clearInterval()
})