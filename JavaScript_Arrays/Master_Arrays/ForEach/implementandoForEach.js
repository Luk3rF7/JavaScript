const { aprovado } = require('../dados_array/dados')

Array.prototype.forEach2(function (callback) {
  for (let i = 0; this; i++) {
    callback(this[i], i, this)
  }
})