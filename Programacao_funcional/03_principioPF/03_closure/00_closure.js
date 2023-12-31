/**
 *  ! Closure
 *  * Closure e quando uma funcao 'lembra'
 * * seu escopo lexico ,mesmo quando a função
 * * é executada fora desse escopo lexico
 */

const x = 3;

function fora() {

  const x = 97;

  function somar3() {
    return x + 3
  }
  return somar3();
}

console.log(fora());