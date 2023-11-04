/* 
Em javascript,especialmente antes da
adoção em massa modulos ES6 ,a 
function as namespace era uma tecnica 
fundamento para organizar e modularizar o codigo
a ideia era encapsular variaveis
função e logicas especificas dentro de uma 
funçao aproveitando escopo local inerente de uma 
função para criar privacidade 
*/

// um exemplo mostrando valor de encapsulamento e parametrização

function DataBaseModule(dependency) {
  // variavel privada
  let connection = 'Private database connection'

  //funcao privada 
  function connect() {
    console.log(`using ${connection} with dependency ${dependency}`)
  }
  //funcao publica 
  function query(statement) {
    connect();
    console.log(`executing query ${statement}`)
  }

  return {
    query: query
  }
}

// Uso: 
let db = DataBaseModule("SomeDependency");
db.query('SELECT * FROM  users')