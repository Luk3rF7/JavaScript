<h1 align="center"> Resumo avançado sobre JavaScript </h1>

<h2> Manipulação de Array </h2>
<P> Podemos manipular array utilizando os metodos: </p>
<li>unshift,shift,push,pop</li>
<li>find -> ele vai procurar pelo criterio e retorna o primeiro</li>
<p> metodo junto com array function
<li>Map ->  ele percorre todo array trazendo novo array com mudança 
</li>
<li>filter -> ele vai correr por todo array e retorn todo elemento do criterio
</li>
<li>Reducer -> ele percorre todo array e traz novo array com valores reduzido
 </li>

 <p> Exemplo: 

          const num  = [1,2,3,4,5,6]
          const numPar = num.find((par) => par % 2 === 0 )
          const numPares = num.filter((pares) => pares % 2 === 0)


<h2>Manipulação de String</h2>

<p>
    assim como array existe metodos que podemos utilizar para manipular string
</p>
<p>
 remover espaço de uma string utilizamo trim()
</p>
<p>
  metodo split("") utilizamo para adicionar espaço ou algo como virgula,ponto etc
</p>
<p>startsWith() vai me trazer true ou falso o que foi descrito no inicio</p>
<p>
endsWith() vai me trazer true ou false se final da frase conter oque foi descrito
</p>

<h2> Exceções e tratamento de erros </h2>

<p>
    a gente utiliza palavras reservada para tratar certo erro de codigo:
</p>
<p> 
  Como throw new Error utilizamo para executar certo error
</p>
<p>
  outor metodo utilizamos tbm try{}catch(e){}
  exemplo:


                  try {
                    // codigo
                  }catch (error){
                    console.log(error)
                  }

Caso não de erro vai executar try,caso aparece algum erro vai pro catch ,utilizamo muito quando se faz promise ou async/await
</p>