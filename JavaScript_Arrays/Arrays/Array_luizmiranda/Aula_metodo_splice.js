const nomes = ['Maria','João','Eduardo','Gabriel','Júlia']
//splice(indice,delete,elem1,elm2,elem3)
const removidos = nomes.splice(-2,Number.MAX_VALUE)
nomes.splice(4,1);
console.log(nomes,removidos)
