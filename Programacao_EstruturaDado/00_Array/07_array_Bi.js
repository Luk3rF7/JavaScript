const tempWeek = [20, 25, 40, 35.5, 15];
const week = ['Seg', 'Ter', 'Qua', 'Qui', 'Sex'];

const arrWeekTemp = []
arrWeekTemp[0] = tempWeek
arrWeekTemp[1] = week

console.log('criamos array bi :', arrWeekTemp);

console.log(`
  Acessando semana : ${arrWeekTemp[1][0]}
  e sua temperatura : ${arrWeekTemp[0][0]}
  Com array bi do arrWeekTemp
  `)