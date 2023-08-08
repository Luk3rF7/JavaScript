<h1 align="center"> Resumo Dom Javascript </h1>

<h3>
    Podemos manipular o Dom apartir de document.metodo
</h3>
<h2>Selecionar elementos: </h2>

<p>Preferencia utilize querySelector ! </p>
<li>document.getElementById("id") ->  podemos selecionar por ids
<li>document.getElementByByClassName("class") ->  podemos selecionar por ids
<li>document.querySelector("#class") -> podemo selecionar seletores css
<li>document.querySelectorAll('.class') -> podemons seleciona todo elemento

<h2>Manipular elementos </h2>
<p>conteudo de texto :
<p> utilizamos metodo textContent onde aparece oque esta no html
podemos atribuir o valor text.textContent = "mudando valor"
<li>const text = document.querySelector('#meuId')

<h2>Manipulando atributos </h2>
<p> utilizando querySelector paga pega tag ele ira buscar o pirmeiro,
<li>const link = document.querySelector('a')
<hr>
<p> para mudar o atributo a gente vai utilizar setAttribute no primeiro argumento qual atributos iremos mudar("href" ) segundo argumento modificamos valor exemplo:
<li> link.setAttribute("href","www.instagran.com")
<li> utilizando getAttribute para resgatar atribute exemplo 
link.getAttribute("href") ela retorna "www.instagran.com"
<li>podemos tbm utilizar hasAttribute para saber se existe aquele atributo ali
<li>Podemos remover atributos com .removeAttribute("target")

<h2> Manipulando classe do css</h2>
<p>
    podemos selecionar elemento onde queremos adicionar algum classe sem interferir no css e deixa-lo mais dinamico
</p>
<li>const elem = document.querySelector('#meuId')
<li> com elem selecionado teremos acesso a propriedades classList e terei acesso a varios metodos:
<li> elem.classList.add("novaClass") -> onde iremos adiciona uma nova classe
<li> elem.classList.remove("novaClass") -> onde iremos remover a classe 
<li>elem.classList.toggle("outraClass") -> ele faz seguinte se a classe existe ele remove,se a classe nao existe ele adiciona

