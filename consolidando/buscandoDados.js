/* buscando e contando dados em Arrays

baseado no array de licros por categoria abaixo faça os seguinte desafios:

*contar o numero de categoria e o numero de livro em cada categoria
*conta o numero de autores
*mostrar  livros do autor Auguto Cury
*transforma a função acim em uma função que ira receber o nome do autor e devolver os livro desse autor
 */

const booksByCategory = [
  {
    category: "Riqueza",
    books: [
      {
        title: "Os segredos da mente milionária",
        author: "T. Harb Eker",
      },
      {
        title: "O Homem mais rico da Babilônia",
        author: "George S. Clason",
      },
      {
        title: "Pai rico,pai pobre",
        author: "Robert T. Kiyosaki e Sharon L; Lechter",
      },
    ],
  },
  {
    category: "Inteligência Emocional",
    books: [
      {
        title: "Você e Insubstituível",
        author: "Augusto Cury",
      },
      {
        title: "Ansiedade - Como enfrentar o mal do século",
        author: "Augusto Cury",
      },
      {
        title: "Os 7 Hábitos das pessoas altamente eficazes",
        author: "Stephen R. Covey",
      },
    ],
  },
];
const totalCategories = booksByCategory.length;
for (let category of booksByCategory) {
  console.log(`Total de livros da categoria : ${category.category}`);
  console.log(category.books.length);
}
function countAuthor() {
  //instancia que recebera authores
  let authors = [];
  //loop para pega categoria
  for (let category of booksByCategory) {
    // loop para pega livros
    for (let book of category.books) {
      //if para checar
      if (authors.indexOf(book.author) == -1) {
        authors.push(book.author);
      }
    }
  }
  //imprimir quantidade de authors
  console.log(authors.length);
}
countAuthor();
function bookByAugustoCury() {
  //crio array vazio para receber
  let books = [];

  for (let category of booksByCategory) {
    for (let book of category.books) {
      if (book.author == "Augusto Cury") {
        books.push(book.title);
      }
    }
  }
  console.log("Livros do author", books.length);
}
bookByAugustoCury();
function bookOfAuthor(author) {
  //crio array vazio para receber
  let books = [];

  for (let category of booksByCategory) {
    for (let book of category.books) {
      if (book.author == author) {
        books.push(book.title);
      }
    }
  }
  console.log("Livros do author", books.length);
}
bookOfAuthor();
