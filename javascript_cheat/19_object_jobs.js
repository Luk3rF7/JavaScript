const obj = {
  name: 'user', // key
  follow: 4578  // valor
}

const userEntries = Object.entries(obj)
console.log(userEntries);
// [['name','user'],['follow',4578]]

userEntries.forEach(([key, value], index) => {
  console.log(`id:${index} , ${key} : ${value}`)
})