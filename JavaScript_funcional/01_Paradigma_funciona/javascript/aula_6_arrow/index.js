// sintaxe facil mas não temos this em objetos e dom

const arrow = () => { console.log('Arrow function e simples e não tem this') }
const message = name => { return console.log('Mensagem De: ' + name) }

arrow()
message('usuario')