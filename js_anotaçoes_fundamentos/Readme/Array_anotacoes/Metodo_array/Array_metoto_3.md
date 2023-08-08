<h1 align="center"> EcmaScript 6 - Array / Metodos </h1>

<h2 align="center"> Metodo Reduce </h2>



<div style="font-size:18px;"> 
  <p>
    a funcao auxiliar reduce foi deixada para o final por ser a mais

    complicada.a ideia por traz dela e pegar todos os valores de um array e 
    condensa-la em um unico. para mostrar seu funcionamento,vamos mostar 
    um caso classico de uso
  </p>

  <li style="font-size:18px;"> for classico :

       let num = [1,2,3,4,5,6];

       let soma = 0;
       for(let i = 0;i < num.length;i++){
          soma += num[i];
       }

<p>
  aqui nao tem segredo,apenas iteramos a lista com um laço de
  repetição e usamo a varivel soma,inicializada em  0,para acumular
  o resultado
</p>

<li style="font-size:18px;"> utilizando reduce

          let num = [1,2,3,4]

          let sum = 0

          soma = num.reduce((soma,num) => {
            return soma + num
          },0)


<p style="font-size:18px;">
difrente dos outro metodo vistos ate agora,o reduce aceita dois parametro:
<li> function (soma,num){} função de iteração</li>    
<li> valor inicial</li>  

<p> 
  para cada iteração,o valor da soma se torna o valor retornado da 
  iteração anterior,sendo que na primeira chamada o valor inicial 
  e o que definimos como o segundo parametro da função,nest caso, o num zero 
  da um no na cabeça,para enteder melhor segue diagrama:
</p>

<img src="./img/diagrama_reducer_valor.png" alt="">
    </p>

  <p>
    segundo exemplo :
  </p>

 <li> utilizando for classico :</li> 

         let alunos = [
         {nome:'aluno_1',idade:10},
         {nome:'aluno_2',idade:18},
         {nome:'aluno_3',idade:30},
         ];

         let nome = alunos.reduce((arrNome,aluno) => {
          arrNome.push(aluno.nome);
          return arrNome
         },[])

<p>
  Vamos	avaliar	o	funcionamento	deste	código.	Na	lista		alunos	,
  chamamos	o	método		reduce	,	e	nele	passamos	a	função	de	iteração
  anônima	 com	 dois	 parâmetros,	 	arrayNomes		 e	 	aluno	;	 e	 um
    Array		 vazio	 (	 [	 ]	 )	 como	 valor	 inicial.	 Em	 cada	 iteração,
  colocamos	o	nome	do	aluno	no		Array		de	nomes	e	o	retornamos,
  ou	 seja,	 esta	 variável	 itera	 toda	 a	 lista	 e	 recupera	 os	 valores	 que
  interessam.	 De	 certo	 modo,	 condensou	 o	 	Array		 em	 um	 único
  valor
</p>