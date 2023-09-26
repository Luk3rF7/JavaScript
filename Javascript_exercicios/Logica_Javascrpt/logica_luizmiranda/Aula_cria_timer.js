
//criar a função timer -> selecionar eventos -> criar função e metodos -> organizar
function Timer(){
    //var global escopo
    let segundos = 0;
    let timer;
    
    // criando funcao do segundos
    function criaHoraSegundos(segundos){
        const data = new Date(segundos * 1000)
        return data.toLocaleTimeString('pt-br',{
            hour12:false,
            timeZone:'UTC',
        })
    }
    
    // funcao inicializa o relogio
    function startTime(){
        const timer = setInterval(function(){
            segundos++;
            relogio.innerHTML = criaHoraSegundos(segundos);
        },1000)
    }
    
    //melhorando eventos  usando if
    document.addEventListener('click',function(e){
        const el = e.target; //cosnt que pega evento elemento
        if(el.classList.contains('zerar')){ 
            relogio.classList.remove('pausado');
            clearInterval(timer)
            relogio.innerHTML = '00:00:00';
            segundos = 0;
        }   

        if(el.classList.contains('iniciar')){
            relogio.classList.remove('pausado');
            clearInterval(timer);
            startTime();
        }
        if(el.classList.contains('pausar')){
            clearInterval(timer);
            relogio.classList.add('pausado');
    
        }
    })
}



