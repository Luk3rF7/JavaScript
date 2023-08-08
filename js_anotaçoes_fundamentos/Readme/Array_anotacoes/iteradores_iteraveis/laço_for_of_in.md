<h1 align="center"> Array laços </h1>

<h2> Iteradores com laço for of </h2>

<p style="font-size:18px;">
  Agora	 que	 revisamos	 os	 principais	 métodos	 auxiliares	 para
	Array		 e	 suas	 aplicações	 nas	 mais	 diversas	 situações,	 e	 também
vimos	com	detalhes	como	funciona	os	novos	protocolos	de	iteráveis
e	 iteradores,	 podemos	 avançar	 para	 a	 próxima	 novidade	 do	 ES6.
Neste	 capítulo,	 vamos	 compreender	 como	funciona	 um	 novo	 tipo
de	laço	de	repetição:	o	laço		for...of	.
Este	 tipo	 de	 laço	 foi	 criado	 para	 percorrer	 um	 objeto	 se,	 e
somente	se,	ele	for	iterável.	Seu	funcionamento	é	bem	simples.	Sua
sintaxe	é:
</p>

<li> sintaxe do for of </li>

        for(variabel of iteracao){
          // corpo
          }
<hr>
<p style="font-size:18px;">
  A	 	variavel		 representa	 uma	 variável	 de	 auxílio	 que	 assume
valores	diferentes	a	cada	iteração,	e	o		iteravel		é	o	objeto	que	será
iterado.	 O	 caso	 de	 uso	 mais	 recorrente	 deste	 tipo	 de	 laço	 é	 para
passar	por	 todos	os	valores	contidos	em	um		Array	,		Set		 ou	 um
	Map	. Para	 contextualizar	 seu	 uso,	 imagine	 que	 temos
  uma	sequência	de	números	inteiros	de	1	a	5	em	uma	coleção:
       

        /* 
          para iterar esta lista num com 
          laço for of e preciso duas coisa de acordo 
          com a sintaxe 
           - Declarar um var auxiliar que recebera o valores item da lista a cada iteraçao
           - indicar o proprio objeto iteravel 
          vamo utilizar number  p/ imprimir valores da lista:
                              */
        let num = [1,2,3,4,5];
        for(let number of num){
          console.log(number);
        }

        caso for objeto:

        const person = { 
          name:'john',
          age:28
        }

          for(let dado of person) {
            ele vai dar esse error:
            TypeError:	perfilDoFacebook[Symbol.iterator]	is	not	a	function
          }
          por isso utilizamo for in
          for(let propriedade in person){
            let info = person[propriedade] 
            console.log(info)
          }
          retornara:
          john
          28
</p>
          
<h2 align="center"> utilizando break and continue </h2>

  <p style="font-size:18px;">
    Assim	como	em	outros	laços	de	repetição,	as	palavras	reservadas
    break	 	 e	 	 continue	 	 também	 funcionam	 dentro	 de	 laços
    for...of	.	Usamos	o		break		para	interromper	a	execução	de	um
    laço.	Nós	podemos	usá-lo,	por	exemplo,	para	colocar	uma	condição
    para	que	um	laço	seja	interrompido	caso	um	número	seja	maior	do
    que	três.
  </p>

              var	numeros	=	[1,2,3,4,5];
              for(var	numero	of	numeros)	{
              		if(numero	>	3)	{
              				break;
              		}
              		console.log(numero);
              }
              //	1	2	3
<li style="font-size:18px;">
  Já	 o	 	continue		 usamos	 para	 indicar	 que	 o	 laço	 deve	 ser
  continuado,	 passando	 imediatamente	 para	 o	 próximo	 item.	 Ele	 é
  útil,	 por	 exemplo,	 para	 colocar	 uma	 condição	 no	 laço	 para	 nunca
  imprimir	no	console	o	número	dois.
</li>

                var	numeros	=	[1,2,3,4,5];
                for(var	numero	of	numeros)	{
                		if(numero	===	2)	{
                				continue;
                		}
                		console.log(numero);
                }

<hr>