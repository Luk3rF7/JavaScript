//lexico fora do escopo ele pega  
const nome ='Luiz'

function falanome(){
    const nome='Olavio'
    console.log(nome)
}

falanome();

function usaFalaNome(){
    falanome()
}

usaFalaNome();