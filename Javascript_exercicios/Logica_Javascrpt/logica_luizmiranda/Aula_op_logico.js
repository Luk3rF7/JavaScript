/*  op Logico
 && = AND > E
 ||  OR > Ou
 !  NOT  -feliz
*/
const feliz = true;
const triste = false;
console.log( feliz && feliz) 
console.log( feliz && triste )  //retorna verdadeiro caso duas derem true
console.log( feliz || feliz) // retorna verdadeira caso um dela e verdadeira

//usuario exemplo com &&

const usuario = 'Lucas'; //vem do formulario
const senha ='123456';
//  console console us      true            false
const vaiLogar = usuario === 'Lucas' &&  senha === '123457';
console.log(` status de login : ${vaiLogar}`)

const checkEmail = 'Lucas@dev.com';
const user = 'Lc'

const inputEmail = checkEmail === 'Lucas@dev.co' || user === 'Lcz'
console.log(`email checado : ${inputEmail}`) 

/* negação ! */