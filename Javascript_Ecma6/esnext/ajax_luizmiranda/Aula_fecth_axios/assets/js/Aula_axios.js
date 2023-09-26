/* fetch('pessoa.json')
.then(resposta => resposta.json())
.then(json => carregaElementosNaPagina(json)) */
axios('pessoas.json')
.then(resposta => carregaElementosNaPagina(resposta.data));

function carregaElementosNaPagina(json){
    const table =document.createElement('table');
    for(let pessoa of json){
        //criar tabela
        const tr = document.createElement('tr');
        
        let td1 =document.createElement('td');
        td1.innerHTML =  `Nome: ${pessoa.nome}`;
        tr.appendChild(td1);

        let td2 = document.createElement('td');
        td2.innerHTML =`idade: ${pessoa.idade}`;
        tr.appendChild(td2);

        let td3 =document.createElement('td');
        td3.innerHTML = ` R$:${pessoa.salario}` 
        tr.appendChild(td3);
       
        table.appendChild(tr);
    }
    const resultado = document.querySelector('.resultado')
    resultado.appendChild(table)
}