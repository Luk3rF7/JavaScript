// function inpure
function generateDate() {
  var date = new Date();
  generate(date);
}
// função inpura gera side-effect
generateDate(); // ???

//function pure

function pure(x) {
  console.log(x)
};

pure(4);