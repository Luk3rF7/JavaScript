
function bomDia() {
  console.log('Bom dia!!!!!!')
}

const boaTarde = function () {
  console.log('Boa tarde!!!!!!')
}

/** 
 *  ! Passar fn para outra Fn e retorna fn 
 *  * fn(fb){ return fn}
 */
function execFn(fn) {
  if (typeof fn == 'function') {
    fn()
  }
}

execFn(3);
execFn(bomDia);
execFn(boaTarde);
/**
 * * Retorna uma fn a apartir de outra fn
 *  ? Com isso podemos ver no seguinte exemplo:
*/
function potencia(base) {
  return function (exp) {
    return Math.pow(base, exp)
  }
};
/**
 *  ? Com isso podemos reutilizar pontencia num variavel podendo ser 2,8,6
 *  ? e guarda numa variavel e passando segundo argm como fn 
 */
const potenciaDe2 = potencia(2);
console.log(potenciaDe2(8))

// * tambem podemos fazer da seguinte maneira :
const pot34 = potencia(3)(4);
console.log(pot34);