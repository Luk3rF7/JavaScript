<h1 align="center"> EcmaScript 6 - Array / Metodos </h1>

<h2 align="center"> Metodo Find </h2>

<p style="font-size: 18px;" >
  Esta função auxilia e particulamento interesante
  quando o objetivo e encontrar um item especifico
  dentro de um array
  digamos,por exemplo que de uma lista de alunos
  queremos somento o registro que contenha o nome "dev"
</p>

<li style="font-size:18px;"> for tradicional

        let person = [
        {nome:'jõao',profissao:"eletricista"},
        {nome:'marcelo',profissao:"segurança de camera"},
        {nome:'john doe',profissao:"Dev"}
        ]

        let jobPerson;
        for(let i = 0;i < person.lenght;i++){
          if(person[i].profissao === 'Dev'){
            jobPerson = person[i];
            break; // evita percorer o resto da lista
          }
        };
<p style="font-size:18px;">
    para cada elemento da lista recuperamos a propriedade
    do elemento e o comparamos com o nome que estamos buscando
    se ele for igual ele para na primeiro elemeto,
</p>   

<li style="font-size:18px;"> utilizando filter: 

            let alunos = [
            {nome:"aluno_1"},
            {nome:"aluno_2"},
            {nome:"aluno_3"},
            ]

            let aluno = alunos.find((aluno) => {
              return aluno.nome === 'aluno_2'
            })

            console.log(aluno)  -> saida aluno_2

<p style="font-size:18px;"> 
caso na lista existese dois aluno_2,somente o primeiro seria retornado
para contorna este caso,precisariamos de usar criterio de busca mais especifico
</p>

<h2 > Metodo Every </h2>

<div style="font-size:18px;">

  <p style="font-size:18px;">
    Every retorna um booleano,every e pertinente para validar
    se todo os elementos de um array respeitam uma condição dada 
    para exemplificar vamos novamente utilizar 
  </p>

  <li style="font-size:18px;"> for classico 


        let alunos = [
        {nome:"aluno_1", idade:18},
        {nome:"aluno_2", idade:15},
        {nome:"aluno_3", idade:20},
        {nome:"aluno_4", idade:25},
        ];

        let todosAlunosMaiores = true;
        for(let i = 0;i < alunos.length,i++){
          if(alunos[i].idade < 18){
            todosAlunosMaiores = false
            break; 
          }
        }

        saida // true caso todo alunos forem maiores de idade 
                  se não ele retornará falso

<li style="font-size:18px;"> utilizando Every
 
         let alunos = [
         {nome:"aluno_1", idade:18},
         {nome:"aluno_2", idade:15},
         {nome:"aluno_3", idade:20},
         {nome:"aluno_4", idade:25},
         ];

         let alunosMaiores = alunos.every((aluno) => {
          return aluno.idade > 18;
         })

<p style="font-size:18px;">
  ele vai iterar cada um dos elemento sob condicao de 
  aluno.idade > 18 e usar op logico:
</p>

<h2 align="center"> Metodo Some </h2>

<div style="font-size:18px;">

  <p>
    se a tarefa e validar se,pelo menos um dos elemento
    satisfaz um dada condição ,o some e o metodo perfeito
     para o trabalho,imagine que trabalhamos no setor de tecnologia de
      um aeroporto e precisamo desenvolver um pequeno programa 
      para saber se alguma das mala de um passageiro esta acima do limite
      maximo estabelecido de 30kg
  </p>

  <li style="font-size:18px;"> for classico </li>


        let pesoDasMalas = [12,32,21,29];

        let temMalaAcimaDoPeso = false;
          for(let i = 0;i < pesoDasMalas.length;i++){
            if(pesoDasMala > 30){
              temMalaAcimaDoPeso = true;
            }
          }
        saida // true caso todo alunos forem maiores de idade 
                  se não ele retornará falso
                  
                  
<li style="font-size:18px;"> utilizando Every

        let pesoDasMalas = [12,32,21,29];
        

         let temMalaAcimaDoPeso = pesoDasMalas.some((peso) => {
          return pesoDaMala > 30;
         })

<p>
  para cada peso da mala contida no peso das malas e verificado se ele 
  e superior a 30kg ,na primeira ocorrencia de caso positivo
  para condição,a execução do loop e interrompida e o metodo
</p>
</div>
</div>