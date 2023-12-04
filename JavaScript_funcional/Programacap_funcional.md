<h1> Programação funcional </h1>

<br>

<h3>Topicos </h3>

<li> <b> First-class </b>
  <p>
     Entende-se que uma linguagem de programação tem Função First-class quando suas funções são tratadas como qualquer outra variável. Por exemplo, numa linguagem desse tipo, a função pode ser passada como argumento pra outras funções, ser retornada por outra função e pode ser atribuída como um valor à uma variável.
  </p>
<br>
<li> <b>Function High Order </b>
<p>
    Um outro conceito diretamente relacionado às funções de primeira classe são as funções de mais alta ordem (higher-order function). Higher-order functions são como são denominadas as funções que retornam uma outra função.
</p>
<br>
<li> <b>Declaração Programa </b>
<p>
  A programação declarativa pode ser alcançada usando métodos JavaScript integrados . A programação declarativa nos permite escrever código mais legível e, portanto, mais fácil de entender. Por exemplo, com programação declarativa, não precisamos usar um loop for para iterar sobre um array.
</p>
<br>
<li> <b>Função pure e inpure </b>
<li> função inpure :
<p>
    Primeiro, uma função impura é uma função que contém um ou mais efeitos colaterais.
</p>
<li> função pure :
<p>
 Uma função pura é uma função sem quaisquer efeitos colaterais.
</p>
 <p>
As funções puras não afetam nenhum estado externo e também não são afetadas por código externo.

Em outras palavras, todos os dados externos que uma função pura usa são recebidos como parâmetros — eles não são usados ​​explicitamente internamente .
Funções puras são mais fáceis de ler e depurar do que alternativas impuras.

</p>
<p>
Clonar um estado externo em uma função pura não torna a função impura.

A duplicação de estado é simplesmente uma operação de copiar e colar que não deixa nenhuma string anexada entre a origem e seu clone.

</p>
<br>
<li><b>Imutabilidade </b>

<p>
Basicamente, a imutabilidade é uma estrutura ou algo que não pode ser alterado. Na programação, esse conceito é aplicado a objetos e variáveis, principalmente em programação orientada a objetos, durante a criação ou quando um objeto está sendo instanciado.
</p>
<br>
<li><b>Composição </b>

<p>
Podemos compor funções pequenas para gerar outras mais complexas de forma bem fácil em JavaScript. A vantagem é o poder de usar essas funções mais complexas, de forma simples, em toda aplicação. Ou seja, aumentamos o reuso.

Por exemplo, em uma aplicação em que necessitamos de uma função para transformar uma string passada pelo usuário em um grito: mudar para caracteres maiúsculos e adicionar uma exclamação no final. Podemos fazer assim em ES5:

</p>
