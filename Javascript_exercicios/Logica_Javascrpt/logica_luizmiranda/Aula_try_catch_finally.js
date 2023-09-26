function retonaHora(data){
    if(data && !(data instanceof Date)){
        throw new TypeError('Esperando instância de Date');
    }
    if(!data){
        data = new Date();
    }

    return data.toLocaleTimeString('pt-BR',{
        hour:'2-digit',
        minute:'2-digit',
        seconds:'2-digit',
        hour12:false
    })
}

try{
const data = new Date('01-01-1970 12:25:12')
const hora = retonaHora(11);
console.log(hora)
}catch(e){
    //tratar o error
}finally{
    console.log('Tenha um bom dia')
}
