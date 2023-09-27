// interface e maneiro de tipar em forma de molde
interface IPost {
  title: string,
}

interface IUsuario {
  nome: string,
  idade: number,
  posts: IPost[],
}
// crio função e utilizo como tipagem a interface:
function printUsuario(usuario: IUsuario): void {
  console.log(usuario.nome + ' - ' + usuario.idade)
  usuario.posts.map((post: IPost) => {
    console.log(post.title)
  })
}

// instancio para dar resultado caso passe valor ou falte ele alertara
// assim conseguimos criar 3 objeto em 1 só
printUsuario({
  idade: 19,
  nome: 'usuarios',
  posts: [
    {
      title: 'P1'
    },
    {
      title: 'P2'
    }
  ]
})