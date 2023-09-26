/* 
Escreva uma funcção cahamada ePaisagem que 
receba dois argumento,largura e altura
de uma imagem(number)
retorne true se a imagem estiver no modo paisagem
*/


function ePaisagem(largura,altura){
    return largura > altura ? true : false;
}
console.log(ePaisagem(1200,800))
//melhoria no codigo
const ePaisagem = (larg,altur) =>  larg > altur ? true : false

