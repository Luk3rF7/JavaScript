const obj = {
  "name": "Lucas",
  "1": "100",
  "city": "São paulo"
}

for (const key in obj) {
  console.log(key)
}
/* 
  ordem insertion 
  '1'
  'name'
  'city'
*/

// todo com Map()

const map = new Map()
map.set("name", "user Map")
map.set("1", "100")
map.set("city", "São paulo")

for (const key of map.keys()) {
  console.log(key)
}

/* 
 inserção correta 
 'name'
 '1'
 'city'
*/ 