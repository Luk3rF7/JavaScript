//transform em numero quebrado em 2 casa

let num = 43516555465.4561431345;

console.log(
  Number(
    //utilizo Number para deixa com Numero
    //mas vai causa NaN por nao ser numerico na linguagem
    num.toFixed(2).replace(
      ".", //oque vou querer troca
      "," // vou troca por esse
    )
  )
);
