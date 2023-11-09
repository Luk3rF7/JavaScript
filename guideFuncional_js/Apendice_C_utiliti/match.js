// match :: RegExp -> String -> Boolean
const match = curry((re, str) => re.test(str));