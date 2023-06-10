
 async function carregaPagina(el){
    try{
        const href = el.getAttribute('href');
        const response = await fetch(href);
       
        if(reponse.status !== 200) throw new Error('ERRO 404!');
       
       
        const html = await response.tex()
        carregaResultado(html);
    }catch(e){
        console.log(e)
    }
   

  /*   fetch(href)
    .then(response => {
        if(reponse.status !== 200) throw new Error('ERRO 404!');
        return reponse.text();
    })
    .then(html =>  carregaResultado(reponse))
    .catch(e => console.log(e)); */
   
}
 
fetch('pagina1.html')
.then(responsta =>{
    if(resposta.status !== 200) throw new Error('Erro 404 not')
    return resposta.text();
})
.then(html => console.log(html))
.catch(e => console.log(e))

function carregaResultado(response){
    const resultado = document.querySelector('.resultado')
    resultado.innerHTML = response;
}