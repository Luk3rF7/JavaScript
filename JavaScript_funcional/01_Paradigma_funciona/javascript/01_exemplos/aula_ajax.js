$.ajax({
  url: "Cadastrar.json",
  type: "post",
  data: {
    nome: 'User 1',
    salario: 3500
  },
  beforeSend: function () {
    $('#resultado').html(msg);
  }
})
  .done(function (msg) {
    $("#resultado").html("Enviando");
  }).fail(function (jqXHR, textStatus, msg) {
    alert(msg);
  });