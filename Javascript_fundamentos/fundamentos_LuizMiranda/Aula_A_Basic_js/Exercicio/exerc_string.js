const nome = prompt('Digite seu Nomes completo:')
const qtdLetra = nome.length


document.body.innerHTML += ` * 1 o seu nome é ${nome}.<br/>`
document.body.innerHTML += ` * 2 Seu nome tem letras:${nome.length}<br/>` //length
document.body.innerHTML += ` * 3 A segunda letra do seu é :${nome.charAt(2)}<br/>` // charAt(3)
document.body.innerHTML += ` * 4 Qual o primeiro indice da letra "A" do seu nome ${nome.indexOf('a')} <br/>`
document.body.innerHTML += ` * 5 Qual o ultimo indice da letra do "S" seu nome ${nome.lastIndexOf('s')} <br/>`
document.body.innerHTML += ` * 6 As ultimas 3 letra do seu nome são ${nome.slice(-3)} <br/>`
document.body.innerHTML += ` * 7 As palavra do seu nome são ${nome.split(' ')} <br/>`
document.body.innerHTML += ` * 8 Seu nome com letra maiuscula ${nome.toUpperCase()} <br/>`
document.body.innerHTML += ` * 9 o seu nome com letra minuscula ${nome.toLowerCase()} <br/>`