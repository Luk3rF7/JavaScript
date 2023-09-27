// funcao primeira class
const getName = function(): void {
  console.log("Hello world Ts Funcional");
};

const getIdade: () => void = function(): void {
  console.log(19);
};

getName();
getIdade();