// manipulando Array

let techs = ["html", "css", "javascript"];

//add um item no fim
techs.push("nodeJS");
//add um item no começo
techs.unshift("javascript");
//remove do fim
techs.pop("python");
//remover do inicio
techs.shift("python");
//pega somendo alguns elemento do array
console.log(
  techs.slice(
    //qual posicaço de inico retirar
    1,
    //posicao do array que vai adicionar
    3
  )
);
//remove 1 ou mais items em qualquer posiçao do array
console.log(
  techs.splice(
    //qual index do array
    1,
    //  quanto elemento quero tirar
    2
  )
);
//encontrar a posicao de um elemento no array
techs.indexOf("html");
