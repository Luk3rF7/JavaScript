const nomes = ['Maria', 'João', 'Eduardo', 'Gabriel', 'Julia']
/* 
 todo metodo splice() - argumentos:
 * https://ricardo-reis.medium.com/splice-969723f47d26
 *  index  -> posição do array
 *  quantidade remover -> 0 ate max
 *  adicionar elem - > adiciona elem no array
 */

// remover:
const removidos = nomes.splice(4, 1,);
console.log(removidos);
//  mudar :
const mudar = nomes.splice(3, 1, 'Lucas');
console.log(mudar)

// simulando pop:
const popSlice = nomes.splice(-1, 1);

// simulando shift :
const shiftSlice = nomes.splice(0, 1);

// simulando push
const pushSlice = nomes.splice(nomes.length, 0, 'Felipe', 'lucas')
// simulando unshift:
const unshiftSlice = nomes.splice(0, 0, 'unshift')
console.log(nomes)

