// join :: Monad m => m (m a) -> m a
const join = m => m.join();