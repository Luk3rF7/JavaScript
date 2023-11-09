// safeLast :: [a] -> Maybe a
const safeLast = compose(Maybe.of, last);