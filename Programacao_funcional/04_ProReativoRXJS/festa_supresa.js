const readline = require('readline');

function obterResp(pergunta) {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  return new Promise(resolve => {
    rl.question(pergunta, resp => {
      resolve(resp);
      rl.close();
    });
  });
}

// * Observe
function namorada() {
  setTimeout(() => {
    console.log('N: Apagar as Luzes...')
    console.log('N: Pedir Silêncio..')
    console.log('N: Surpressa!!!')
  }, 2000)
}
// * Observe
function sindico() {
  setTimeout(() => {
    console.log('S: Monitorando barulho!')
  }, 1000)
}
// * Subject
async function porteiro(interessados) {
  while (true) {
    const resp = await obterResp('O namorado Chegou?(s/N/q)')
    if (resp.toLowerCase() === 's') {
      (interessados || []).forEach(obs => obs());
    } else if (resp.toLowerCase === 'q') {
      break;
    }
  }
}

porteiro([namorada, sindico])