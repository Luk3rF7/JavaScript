const pessoas = [
  { id: 3, nome: "Lucas" },
  { id: 2, nome: "Maria" },
  { id: 1, nome: "Helena" },
];

//utilizando OBjec.Map
const novasPessoas = new Map();
for (const pessoa of pessoas) {
  const { id } = pessoa;
  novasPessoas.set(id,{...pessoa});
}
console.log(novasPessoas)

//utilize get par aobter valor do MAP
console.log(novasPessoas.get(2))

console.log("outro modo de fazer:") 

//destructure
for (const [ identifier, {id,nome}] of novasPessoas){
    console.log(identifier,id,nome)
} 

//buscando só as cahves 

for (const pessoas of novasPessoas.keys()){
    console.log(pessoas)
}



/* const novasPessoas = {};
for(const {id,nome} of pessoas){ 
    novasPessoas[id] = { id,nome}
}
*/
