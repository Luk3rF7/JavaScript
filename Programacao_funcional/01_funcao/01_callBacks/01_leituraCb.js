const fs = require('fs');
const path = require('path');

const caminho = path.join(__dirname, 'dado.txt');
function exibirConteudo(err, conteudo) {
  console.log(conteudo.toString())
}
// ? normal
fs.readFile(caminho, {}, exibirConteudo);
// ! arrow func
fs.readFile(caminho,
  (_, conteudo) => console.log(
    'ArrowFn: ',
    conteudo.toString()
  ));

console.log('Inicio');
const conteudo = fs.readFileSync(caminho);
console.log('Inicio depois da variavel conteudo!');
console.log(conteudo.toString());
console.log('Fim');