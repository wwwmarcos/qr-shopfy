import { createStore, applyMiddleware } from 'redux'
import { router as routerMiddleware } from './middlewares'

import reducers from '../reducers'

const middlewares = applyMiddleware(routerMiddleware)
const store = createStore(reducers, middlewares)

export default store
