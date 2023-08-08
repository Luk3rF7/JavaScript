<h1 align="center"> Resumo Dom Javascript </h1>

<h2>Manipulação de Evento</h2>

<h3>Clique evento </h3>
<p>
  Assim como elemeto do Dom podemos utilizar eventos de clico,mosue,teclado para interagir 
  exemplo :
</p>
<h3>Botao</h3>
<hr>
<p>a gente seleciona e depois utilizamos button.addEventlistenner onde ele vai escutar o evento ,ele recebe no seu primeiro argumento o evento seja "click","keyPress","dbclick" etc e segundo argumet recebe uma callback  onde faz alguma coisa
<li>Botoes: const button = document.querySelector("button")
<br>
button.addEventListenner("click", () => { console.log("botao clicado !")})
<h3>Mouse</h3>
<hr>
<p> podemos selecionar tbm seta do mouse passa por certo elemento ter algum tipo de ação exemplo

<li> const elem = document.querySelector("container");
<br>
<br>

       elem.addEventlistenner("mouseover",() => { 
       console.log("altere a cor") 
      })

<h3> Teclado </h3>
<hr>
<p> Possui tambem evento de teclados 

<li> const elemText = document.querySelector('inputText')


          elemText.addEventlistenner("keydown",() => {
            console.log("tecla pressionada")
          })

<h3>Formularios </h3>
<hr>
<p>Nos formulario tambem existem eventos
<li> const form = document.querySelector('form')

          form.addEventlistenner("submit", (e) => {
              e.preventDefault()
          })

<p> diferente utilizamos submit quando ele e submitido e tbm utilizamos evento preventDefault para não ficar carrregando ou enviando toda hora q atualizar

<h3>Propagação de eventos </h3>
<hr>
<p> posso adiciona direto o evento exemplo:

      document.querySelector("elemPai").addEventlistenner("click",() => {
        console.log('voce clickou nesse elemento')
      })

com isso o elemento filho tbm recebe o click caso você tenha elemento filho,para resolver esse problema utilizamos seguinte stopPropagation()

      document.querySelector("elemPai").addEventlistenner("click",(event) => {
        event.stopPropagation();
        console.log('voce clickou nesse elemento')
      })
<h3>Delegação dos eventos </h3>
<hr>
<p> posso adiciona direto o evento exemplo:

      document
      .querySelector("elemPai")
      .addEventlistenner("click",(event) => {
        if(event.target.match(".elemFilho")){
          console.log("evento delegado filho")
        }
      })

