function fn1() {
  fn2();
}
function fn2() {
  fn3();
}
function fn3() {
  console.log('entrou no event loop do js')
  setTimeout(() => {
    fn4()
  }, 3000);
  console.log('fn3');
}
function fn4() {
  fn5()
}
function fn5() {
  console.log("timeout finalizando event loop")
}
function main() {
  console.log('stack iniciada!')
  fn1();
}

main();
console.log('fim da stack');