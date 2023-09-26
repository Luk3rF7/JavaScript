const numero = Number(prompt('Digite um numero: '))
const numeroTitulo = document.getElementById('num-titulo')
const titulo = document.getElementById('texto')
numeroTitulo.innerHTML = numero;
titulo.innerHTML +=`
<p> Raiz quadrada é : ${numero ** 0.5} </p>
<p> ${numero} é inteiro: ${Number.isInteger(numero)} </p>
<p> é NaN : é : ${Number.isNaN(numero)} </p>
<p> Arrendondando para baixo é:${Number(Math.random(numero))} </p>
<p> Arrendondando para cima:${Math.floor(numero)} </p>
<p> Com duas casa decimais é : ${numero.toFixed(2)}</p>`
