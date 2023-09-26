axios.get('/user?ID=1234')
  .then(function (resp) {
    //caso de sucesso
    console.log(resp)
  })
  .catch(function (error) {
    // caso de error
    console.log('Erro', error)
  })
  .finally(function () {
    // caso precise executar algo antes de finalizar
  })