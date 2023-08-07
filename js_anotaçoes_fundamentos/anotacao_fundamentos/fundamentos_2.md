<h1 align="center">Resumo javascript </h1>

<h2>Conversão de tipos:</h2>
<p>No javascript temos varios metodo e forma de converter dados exemplo:</p>

<p>const meuNmero = "11"</p>
<p>
  Para converter numero string para number utilizamos metodo Number(meuNmero)
</p>

<h2>Condicional famoso if e Switch </h2>
<p>condicional a gente utiliza para fazer checagem exemplo:</p>
<p>idade = 20;</p>
<p>

                if(idade < 18){
               console.log('menor de 18 anos')
                }else {
                  console.log('e um adulto')
                }
</p>
<h4>Caso tenha mais de uma condição ou comparação utilizamos else if:</h4>
<p>

                if(idade < 18){
               console.log('menor de 18 anos')
                }else if(idade > 18 && idade < 50>){
                  console.log('e um adulto')
                }else {
                  console.log('idoso')
                }
</p>
<p>As condiçoes sempre retorn true ou false </p>
<p>

                if(true){
                  console.log('sera executado')
                }
 </p>

 <h2> Switch </h2>
 <p>Mesma estrutura so que e mais complexa exemplo:</p>

 <p>

            const fruta = "maça"
            aqui irei colocar oque será avaliado
            switch(fruta){
              aqui dentro utilizarei case = caso
              case "Banana":
              console.log('isso e banana')
                break;
              case "maça":
               console.log('isso e maça')
                break;
              case "Pera":
              console.log('isso e uma pera')
                break;
              default:
              console.log('não existe essa fruta')
            }
  </p>