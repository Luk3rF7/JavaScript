// reject :: a -> Task a b
const reject = a => Task.rejected(a);