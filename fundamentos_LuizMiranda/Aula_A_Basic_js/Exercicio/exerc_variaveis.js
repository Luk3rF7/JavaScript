let varA = 'A' //B
let varB = 'B' // C
let varC = 'C' //A 
let varD; // A
//local

varD = varA; // var recebeu A
varA = varB; // var recebe B
varB = varC; // var recebe C
varC = varD; // var recebe D 

console.log(varA,varB,varC)