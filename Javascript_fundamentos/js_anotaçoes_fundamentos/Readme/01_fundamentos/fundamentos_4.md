<h1 align="center"> Resumo Fundamentos JavaScript </h1>
<h2>Funções </h2>
<p>
As funções assim como as variaveis são feitas para salvar,trechos de codigos e reutilizar varias vezes </p>
<p>
como construir utilizamos a palavra function nome(arg,arg) arg(argumetos são como variaveis onde guarda  e podem ser utilizaveis) { corpo da função } depois devemos invocala que e nome + ( )
</p>
<p>

              function cumprimentar(){
                console.log("olá mundo!")
              }
</p>

 <h2> Escopo de Variaveis:</h2 >

 <p>
  escopo global fica fora do escopo  -> escopo global { escopo local 
  }  exemplo:
 </p>
 <p>

          let cor = "blue";
          let cor = "red" <- vai da erro pois esta variavel esta sendo utilizada no global 
          function mostrarCor(){
            let cor = "verde" <- essa variavel não por causa que e uma local 
            console.log(cor)
          }

          console.log(cor) //saida blue
          mostrarCor() // saida verde

 </p>

 <h3> Hoisting </h3>
 <p>
   funçoes sao inçada acima do codigo exemplo:
 </p>
 <p>

            testHoisting( )

            function testHoisting(){
              console.log('Estou abaixo da invação da funcao')
            }
 </p>

 <h3>Arrow function :</h3>
 <p>
 ela function igual uma função so que sintaxe e diferente 
 
            const Arrow = ( arg) => { // code }
 </p>

 <h3>Falsy & truthy </h3>
 <p>
 uma variavel false e assim const minhaVar = "" retorna false</p>
 <p>
 uma variavel truthy e assim const minhaVar = "Algo texto" retorna truthy</p>