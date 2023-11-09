// safeHead :: [a] -> Maybe a
const safeHead = compose(Maybe.of, head);