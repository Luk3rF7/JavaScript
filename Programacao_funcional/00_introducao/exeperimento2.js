function esperarPor(tempo) {
  const futuro = Date.now() + tempo;

  while (Date.now() < futuro) { };
};

setTimeout(() => { console.log('Exec #1'); }, 3000)
setTimeout(() => {
  esperarPor(3000);
  console.log('Exec #2');
}, 300)

esperarPor(5000);
console.log('Fim');