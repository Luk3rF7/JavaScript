/* 
&& (and)
|| (or)
*/
const [a, b, c] = [true, true, true];

console.log(a && b && c);

const nome = "Lucas";
const sobrenome = "Felipe";

function falaNome() {
  console.log(nome + " " + sobrenome);
}

if (nome && sobrenome) {
  falaNome();
}

//curto

nome && sobrenome && falaNome();

// outro jeito
const corPadrao = "black";
let corUsuario = null || corPadrao;

console.log(corUsuario);
