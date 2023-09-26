<h1 align="center"> Resumo Dom Javascript </h1>
<h2>Manipular O Css </h2>
<p> Podemos tambem manipular o css utilzando 
const elem = document.querySelector("#meuId")</p>
<li> agente acessa o style elem.style e depois adicionamos a propriedade do css exemplo -> elem.style.color = "red"
<li> No css propriedade que que utiliza - igual background-color,no js utiliza metodo camel case = elem.style.backgroundColor = "yellow"

<h2>Navegação entre nos</h2>
<p>
    quando falamos de dom cada elemento e um nózinho pai e filhos exemplo:
</p>
<li> const input = document.querySelector("#meuInput") ele ta rodeado de elemeto pai e irmao
<li> para pega elemento pai fazemos const elemPai = elem.parentNode o Node vem de nó
<li> para pegar elemento filho fazemos elemFilho = elem.firstChild onde ele retorn eleme filho 
<li>podemos utilizar o ultimo filho  utilizamos lastChild

<h2>Manipulação de estrutura de DOM</h2>
<p>Criando elemento </p>
<li>const criarElem = document.createElement('div') com createElement a gente pode criar qualquer elemento do Dom  e passando nome dela nos parametro ("Div")
<p> com isso podemos adiconar a magica do javaScript com  createEleme + textContent 

          const divElem = document.createElment('div')

          divElem.textContent = "uma div com texto"

depois só adicionamos utilizando document.body.appendChild(divElem) e prontinho temos div comt exto feito no javascript!
<p>Podemos utiliza insertBefore() onde recebe primeiro param divElem e segundo onde queremos adicionalo insertBefore("divElem","divPai") e com removeChild() podemos remover o elemento