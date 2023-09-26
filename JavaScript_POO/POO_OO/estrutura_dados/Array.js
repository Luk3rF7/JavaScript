const pilotos = ["Senna", "L. hamilton", "F.massa", "Schumacher"];

// indexação uso colchetes & lenght :

console.log(pilotos[0]);
console.log(pilotos.length);

//usando for of
for (let pilot of pilotos) {
  console.log(pilot);
}
//add piloto

pilotos.push("Alonso");
//encontrar elemento

const senna = pilotos.find((piloto) => piloto === "Senna");
