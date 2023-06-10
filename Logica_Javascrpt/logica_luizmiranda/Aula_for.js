for (let i =0; i <= 5; i++){
    console.log(i);
}

for(let i = 500;  i >= 200; i-= 10){
    console.log(`Linha ${i}`)
}

//checa par e impar

for (let i = 0; i <= 10;i++){
    const par = i % 2 === 0 ? 'Par' : 'Impar';
    console.log(i,par)
}

// percorer arrays
const frutas = ['Maçã', 'Pêra','Uva','Morango','Melancia','Abacaxi']

for(let i = 0; i < frutas.length; i++){
    console.log(`Indice ${i}`,frutas[i])
}