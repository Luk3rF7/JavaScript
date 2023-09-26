//buscar

let umString = "um rato roeu a roupa do rei de roma"

console.log(umString.charAt(6)) //vai trazer t
console.log(umString.concat('',' em',''))  //concatena 
console.log(umString.indexOf('texto'))  //pesquisar por indice
console.log(umString.lastIndexOf('o')) // começa de traz para frente

//expresão regulares
console.log(umString.match(/[a-z]/)) //ele encontra um array
console.log(umString.search(/x/)) // mesma coisa do index
console.log(umString.replace('um','Outra')) //vai trocar a string
console.log(umString.length) //vai contar qaunqtidade da string
console.log('teste........')
// console.log(umString.splice(2, 5)) //vai fatiar string (start,fim)
console.log(umString.substring(umString.length - 5)) // faz msm coisa que slice
console.log(umString.split('')) // dividir string espaço,virgula,ponto
console.log(umString.toLowerCase()) // tolowerCase minuscula - toupperCase vira maiuscula