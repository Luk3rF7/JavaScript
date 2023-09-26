//selecionando elemento
const container = document.querySelector('.container');
//criando 
const div = document.createElement('div');


//array
const elementos = [
    //objeto
    {tag:'h1', texto:'Frase 1 - inicial'},
    {tag:'h4', texto:'Frase 2 - Titulo'},
    {tag:'p',texto : 'Frase 3 - paragrafo'},
    {tag: 'section',texto: 'Frase 4 - section'},
    {tag: 'footer',texto: 'Frase 5 -Footer'},
];
//usando for controle

for(let i = 0;i < elementos.length; i++){
   let {tag,texto} = elementos[i];
   let tagCreate = document.createElement(tag);
   tagCreate.innerHTML = texto;
   div.appendChild(tagCreate);

}
container.appendChild(div);

/* 
           Outro modo
           
for(let i = 0;i < elementos.length; i++){
   let {tag,texto} = elementos[i];
   let tagCreate = document.createElement(tag);
    let textoCriado = document.createTextNode(texto);

    tagCriada.appendChild(textoCrirto);
   div.appendChild(tagCreate);

}
*/

