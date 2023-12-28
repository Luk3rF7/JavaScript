/**
 *  ! Funcion Declaration:
 *  * Quando utilizamos function + nome :
 */
let a = 4;

function BomDia() {
  console.log(`Bom dia`)
}
// Bomdia() // bom dia
/**
 *  ! Funcion Expression:
 *  * Quando utilizamos uma variavel para
 *  * Armazena funcao ou func Anonima :
 */

const bomDia = () => console.log('bom dia fn expression')
const boaTarde = () => {
  return 'boa tarde fn Expression'
}

// let x = bomDia();
// let y = boaTarde();

/**
 * * Caso eu passa function express sem return 
 * * Ela me retorna undefined ! 
 *  ! x return = undefined :
 *  ? y return = boa tarde fn Expression:
 */


module.exports = {
  bomDia,
  boaTarde
}