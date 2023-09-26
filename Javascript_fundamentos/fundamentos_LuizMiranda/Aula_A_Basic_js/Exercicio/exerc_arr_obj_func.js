function meuEscopo () {
    const form = document.querySelector('.myform');
    const resultado = document.querySelector('.resultado');
    const pessoas = [];

    function recebeEventoForm(evento) {
        evento.preventDefault()

        const nome = form.querySelector('.nome');
        const sobrenome = form.querySelector('.sobrenome');
        const peso = form.querySelector('.peso');
        const altura = form.querySelector('.altura');

      //pega valores dentro do array:
      pessoas.push({
        nome: nome.value,
        sobrenome:sobrenome.value,
        peso: peso.value,
        altura: altura.value
      });
      resultado.innerHTML += `<h3>${nome.value}${sobrenome.value} \n  ${peso.value} ${altura.value}  </h3>`;
    }
    
    form.addEventListener('submit',recebeEventoForm)
  
}
meuEscopo();