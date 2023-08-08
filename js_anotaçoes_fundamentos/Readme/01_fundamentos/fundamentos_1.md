<h1 align="center"> Resumo Fundamentos JavaScript </h1>

<h2>Variaveis</h2>
<p>as variavel podem guardar dados exemplo :</p>
<p>
  const minhaVariavel = "Ola mundo!" utilizando console.log(minhaVariavel) ele
  vai aparecer no browser
</p>

<h3>Variaveis e tipo de dados</h3>
<hr>
<li>
  String são entre -> 'String' ,"String", `Pode string + dado utilizando
  ${dado}`
</li>

<li>
  Number -> 1 ate infinito caso utilize 1 + '1' ele retorna 11 porque ira
  concatenar
</li>

<li>boolean -> true ou false utilizamos para validações</li>
<li>Objeto utilizo -> meuObj = {}</li>
<li>Lista(Array,vetor) -> meuArray = []</li>
<li>nullo -> MeuNull = null; bom para iniciar variaveis sem valores</li>
<li>undefined -> MeuUndefined -></li>
<li>Para identificar um tipo de dado utilizamos typeof</li>

<h3>Let e const</h3>
<hr>

<p>
  se agente utiliza let para mudar valores e const para fixar um vlaor só
  exemplo: const x = 10; let y = 5; seu quiser mudar variavel const x para outro
  valor vai dar error, agora seu quiser mudar valor da variavel let irei
  tranquilamente contanto que seja abaixo ou em outro scopo
</p>

<h3>Aritmetrica</h3>
<hr>

<p> console.log(x + y);</p>
<p> console.log(x - y);</p>
<p> console.log(x * y);</p>
<p> console.log(x /
  y);
</p>
<h3>operadores de comparação:</h3>
<hr>
<p>se e igual console.log(x == y)</p>
<p>Diferente console.log(x != y)</p>
<p>Diferente tipo de dado console.log(x !== y)</p>
<p>se e igual tipos de dados console.log(x === y)</p>
<p>se e igual console.log(x == y)</p>

<h3>Operadores Logicos</h3>
<li>and -> && quando as duas forem true ele retorna true</li>
<li>Or -> || um ou outro der true ele retorna</li>
<p>exemplo:</p>
<p>console.log(5 < 10 && 20 < 10)</p>
<p>console.log(5 < 10 || 20 < 10)</p>