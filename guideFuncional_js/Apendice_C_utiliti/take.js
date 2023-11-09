// take :: Number -> [a] -> [a]
const take = curry((n, xs) => xs.slice(0, n));