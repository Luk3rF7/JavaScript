const pessoa = {
  nome: 'lucas',
  idade: 28,
  nacionalidade: 'Brasileiro'
}
const pessoaProxy = new Proxy(pessoa, {
  get: (obj, prop) => {
    console.log(`valor ${prop}: ${obj[prop]}`)
  },
  set: (obj, prop, value) => {
    if (value !== 'number') {
      return console.log('valor digitado não e um numero')
    }
    console.log(`Mudando ${prop} para ${obj[prop]} para ${value}`);
    obj[prop] = value
  },
})
pessoaProxy.idade
pessoaProxy.idade = '43'

