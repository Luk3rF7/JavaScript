const arr = []
const arr2 = []
/* 
 Adicionando array 
  - inicio -> push
  - final  -> unshift
*/
arr.push('Inicio')
arr.push('meio')
arr.push('Fim')

arr2.unshift(3)
arr2.unshift(2)
arr2.unshift(1)

console.log('adicioando Com push array:', arr)
console.log('adicioando com unshift array:', arr2)

/* 
 Remover elemento do array :
 - pop() - > remove ultimo elemento
 - shift() => remove primeiro elemento
*/

arr.pop()
arr2.shift()
console.log('removendo com pop array: "Fim"', arr)
console.log('removendo com shift array:"1" ', arr2)

/* 
 slice - fatiar
 - inicio do elemento
 -onde vai parar fatiamento 

  concatenar - [...]
*/
const juntarArray = [...arr, ...arr2];
console.log('juntamos: ', juntarArray);
const seprandoArray = juntarArray.slice(0, 2)
console.log('array fatiado')
console.log(seprandoArray)

/* 
Reordenar o array com sort():
*/
const arrNum = [1, 3, 2, 5, 4, 6]
console.log('valores elemento array antes do sort -> ', arrNum)
arrNum.sort()
console.log('ordena sequencia do array -> ', arrNum)

/* 
 todo conversoes 
  string- > array utilizo split('')
  array -> string utilizo  join(' ')
*/
const name = 'lucas,victoria,marcelo'
const arrName = name.split(',')
console.log('string p/ array: ', arrName)
const nameArr = ['victoria', 'mary', 'Rhavi']
const unirArr = nameArr.join(', ')
console.log('array p/ string : ', unirArr)

