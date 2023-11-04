function capitalizarMap(colecao, attr) {
  if (colecao.length > 0) {
    return typeof colecao[0] == 'object' && attr ?
      colecao.map(item => item[attr].charAt(0).toUpperCase())
      colecao.map(item => item = item.charAt(0).toUpperCase() + )
  }
}