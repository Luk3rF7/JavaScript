
// ! Sem Lazy : 

function eage(a, b) {

  //processamento pesado 
  const time = Date.now() + 2500;
  while (Date.now() < time) { }

  const valor = Math.pow(a, 3);
  return valor + b
}

// ! Com lazy

function Lazy(a) {
  //processamento pesado 
  const time = Date.now() + 2500;
  while (Date.now() < time) { }

  const valor = Math.pow(a, 3);
  return function (b) {
    return valor + b
  }
}
