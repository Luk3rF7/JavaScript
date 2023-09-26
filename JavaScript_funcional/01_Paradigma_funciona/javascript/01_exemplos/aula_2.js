// metodo nativo
setTimeout(function () {
  console.log('set Timout metodo nativo');
}, 5000)

// cb
function exec_5s(seg) {
  setTimeout(function () {
    console.log('função set Timout seg em js ->', seg);
  }, seg)
}
exec_5s(4000);

// funciona - maneira funcional exemplo - 1
const f_variable = () => { console.log('função numa variavel 5segundo ') }
setTimeout(f_variable, 5000);


console.log('Utilizando função em variavel high-order e ');
