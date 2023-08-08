<h1 align="center"> Resumo avançado sobre JavaScript </h1>

<h2> Callback => fn</h2>
<p>
  callback são chamadas de retorno,fn e quando solicitamos alguma coisa exemplo:
</p>
<p>

            function cumprimentar(name,cb){
              console.log("ola" + name)
              cb()
            }
            function mostrarSaudacao(){
              console.log("como voce esta")
            }

              cumprimentar("Dev",mostrarSaudacao)
</p>

<h2> SetTimeOut </h2>

<p>
  O setTimeout serve para quando queremos colocar timer para executar certa função ou ação exemplo:
</p>

<p>      
          
          const mostraMsg = "essa msg sera executada em 3s"
                // no js cada 1000 = 1s
          setTimeout(mostrarMsg,3000) 


<h2> Promisse </h2>

<p> Promisse como Promessa onde ela recebe 2 params reject e resolve,ai onde podemos resolver essa promessa ou rejeita-la exemplo: 

            const promise = new Promise((resolve,reject)=>{
                const condicao = true;
                if(condicao){
                  resolve("A condição e verdadeira")
                }else {
                  reject("A condição e falsa")
                }
                })

Essa acima e sintaxe ,para executar uma promisse a gente utiliza metodos:


<li>utilizamos then() -> promise.then() onde ele vai executar a promessa exemplo :

          promise.then((msg) => {
            console.log(msg)
          })

<li>utilizamos catch() -> promise.then().catch(e)
para pega nosso erro caso a promessa nao seja eject

        promise.then((msg) => {
          console.log(msg)
        }).catch((error) => {
          console.log(error)
        })

as promise são executar ou necessaria quando esperamos resposta de uma api ou Banco de dados ,tambem podemos utilizar outra maneira que e com asycn/await.
</p>
<p>
  Podemos tbm utilizar outro metodos da promisse como promise.all,promise.race 
  <li>Promise.all -> traz promesa que mais demora e retorna todas as resposta ou promessa
  <li>Promise.Race me retorna qual promessa executa primeiro
</p>
<h2>Async Await</h2>

<p>
  A gente utiliza da seguinte maneira async / await,a gente deve envolver num try{ }catch{ }
  assim podemos tratar error da promise ou APi
  
  
          function obterValor(){
          const promise => new Promise((resolve,reject) => {
          setTimeout(() => resolve("Valor objtido"), 2000)
              })

          const dados = await promise
          console.log(dados);
  }
</p>

<h2>Json - Javascript Object Nation</h2>
<p>
Json  são estrutura onde adicionamos dados  entre chaves {} e aspa dupla ""


      Objeto -> { nome: "string "}
      Json tem essa sintaxe -> {"nome":"String"}
  

onde ele padroniza a comunicação do front-end e back-end em um linguagem só
a gente utiliza maiusculo metodo JSON.stringify onde ele convertera  objeto em json

      const pessoa = {name: "joao" ,age: 35}

      const jsonString = JSON.stringify(pessoa)

agora invertendo recebendo json e convertendo:

      const json = '{"name":"joao","age":"35"}'

utilizamos Json.parse :

      const pessoa2 = JSON.parse(json);

</p>