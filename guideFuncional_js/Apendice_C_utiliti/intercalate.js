// intercalate :: String -> [String] -> String
const intercalate = curry((str, xs) => xs.join(str));