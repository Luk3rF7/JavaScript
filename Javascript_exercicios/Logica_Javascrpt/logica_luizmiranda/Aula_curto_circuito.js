/* 
&& -> false && true -> false "o valor mesmo"
|| -> 
*/

console.log('Lucas felipe' && true && NaN);
console.log("Lucas" && "Vicky")

function falaOi(){
    return 'OI'
}

const vaiExecutar = 'joaozinho'

console.log(vaiExecutar && falaOi());

// || 
console.log(0 || false || null || 'Lucas' || true)

const corUsuario = 'vermelho' 
const corPadrao = 'red'
const opcaoCor =  corUsuario || 'Azul'

console.log(opcaoCor)

const a = 0;
const b =null;
const c = false;
const d = 'false';
const e = NaN;

console.log(a || b || c || d || e)