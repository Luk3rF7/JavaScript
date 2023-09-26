<h1 align="center"> Resumo Fundamentos JavaScript </h1>
<h2> Estrutura de Repetição :</h2>
<p>
  são estrutura que se repeti 1,2,3,4,5,6 e quando queremos executar algo repetitivo
  executamento um loop
</p>
<p>
queremos exibir valor de uma variavel 10vezes 
</p>

<h3>Estrutura For :</h3>
<p> a estrutura for e seguida por um Contador,Condição de limite e incremetador:

            for(let indice = 0 ; indice < 10 ;indice++){
              console.log('valor de indice é :' + indice)
            }
</p>
<h3>while :</h3>
<p> apenas uma condição no while e meu contador fora do escopo,meu incremento fica depois  exemplo:

              let index = 0

              while(index < 5 ){
                console.log('O valor dentro do while é : + index )
                i++
              }

</p>
<h3>Do while :</h3>
<p> começa contado fora do escopo passamos do{ codigo + incrementação } e condição 

              let w = 0

                do {
                console.log('O valor dentro do while é : + w )
                w++
              }while(w < 5 )

</p>
