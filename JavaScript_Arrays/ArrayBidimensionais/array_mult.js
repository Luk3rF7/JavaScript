let garagem = [
  ["Mustang", "F-150", "Explorer"],
  ["corvette", "Silverado", "Equinox"],
  ["camry", "Highlander", "Tacoma"]
]

// pego primeiro array segundo elemento:
// console.log(garagem[1][1])

for (let i = 0; i < garagem.length; i++) {

  console.log('first loop', garagem[i])

  for (let j = 0; j < garagem[i].length; j++) {
    console.log('second loop', garagem[i][j])
  }
}