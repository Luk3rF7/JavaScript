for (let letra of "Cod3r") {
    console.log(letra)
}

const assuntosEcma = ['Map', 'Set', 'Promise']

for (let index in assuntosEcma) {
    console.log('forIn', index)
}

for (let assunto of assuntosEcma) {
    console.log('forOf', assunto)
}

const assuntosMap = new Map([
    ['Map', { abordado: true }],
    ['Set', { abordado: true }],
    ['Promise', { abordado: false }],
    ['Promise', { abordado: true }],
])

for (let assunto of assuntosMap) {
    console.log("new Map", assunto)
}

for (let chave of assuntosMap.keys()) {
    console.log("map .keys", chave)
}

for (let valor of assuntosMap.values()) {
    console.log(valor)
}

for (let [ch, vl] of assuntosMap.entries()) {
    console.log(ch, vl)
}

const s = new Set(['a', 'b', 'c'])
for (let letra of s) {
    console.log(letra)
}