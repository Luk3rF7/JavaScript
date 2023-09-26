// criar função:
function cl(x) {
  console.log('console: ' + x);
}

// instanciar ela em um variavel :
const escrever = cl;

// reutilizar :
escrever('Função como valor de constante')

// função de ordem superior 
// crio uma função onde receber instancia da função
function retorn(fn) {
  return fn
};
//retorna guarda na variavel
const exibir = retorn(escrever);

exibir('Passei por duas etapa uma variavel function escrever e função retorna ')

// pode guarda em um array :

let acoes = [cl, exibir('\nExibindo: chamando dentro de um array')];

acoes[0]('executando dentro do array')
acoes[1]

// arrow function 
const timeout = (seg) => setTimeout(() => cl(`Aguardando ${seg}s`), parseInt(seg) * 1000);

timeout(5)