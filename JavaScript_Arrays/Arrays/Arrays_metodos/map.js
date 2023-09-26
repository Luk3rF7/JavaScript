// Map

const vetor = [
    {
        id:1,
        nome: 'Bicicleta',
        categoria:1
    },
    {
        id:2,
        nome: 'motoca',
        categoria:2
    },
    {
        id:3,
        nome: 'patins',
        categoria:3
    },

]

const categorias = {
    1: 'Bicicleta',
    2:'Motoca',
    3:'Patins'
}

// utilizando map
vetor.map((item)=>{
    console.log(item)
});

//utilizando map onde traga so nome do item
const vetor2 = vetor.map((item) =>{
    return `Nome do item : ${item.nome}`
})

const vetorCategoria = vetor.map(
    item =>  // ex: item,produto,
    {
        item.categoria = categorias[item.categoria] 
        return item
    })

console.log(vetor2)
console.log(vetorCategoria) 