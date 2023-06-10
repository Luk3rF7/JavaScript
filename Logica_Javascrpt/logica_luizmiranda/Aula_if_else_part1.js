/*      sistema de horas
entre 0 - 11 Bom dia
entre 12- 17 boa tarde
entre 18 - 23 Boa noite 
*/
const hora = 50;
 // e nem entre 0 e nem entre 11 - LEIA
//if pode ser sozinho 
//sempre que utilizo a palabra else,precisa de um if antes
//posso ter varios else if
//1 else por checagem


if(hora >= 0 && hora <= 11){
    console.log("Bom dia")
}else if( hora >= 12 && hora <= 17){
    console.log("Boa tarde!")
}else if(hora >= 18 && hora <= 23){
    console.log('Boa noite!')
}else {
    console.log('deu erro passou de 24horas')
}

const tenhoGrana = true;

if(tenhoGrana) {
    console.log("vou sair de casa")
}else {
    console.log('Não vou sair de casa')
}