// prop :: String -> Object -> a
const prop = curry((p, obj) => obj[p]);