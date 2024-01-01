const elem = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// # removendo final :
console.log(elem)
elem.pop()
elem.pop()
const elemRemovido = elem.pop()
console.log('quantidade de  removidos com pop', elemRemovido)
// # removendo inicio :

elem.shift()
elem.shift()
elem.shift()
const removidoShift = elem.shift()
console.log('quantos fora removido por shift', removidoShift);
console.log(elem)