
import { createStore, applyMiddleware, compose } from 'redux'
import { routerMiddleware } from 'react-router-redux'
//import thunk from 'redux-thunk'
import createHistory from 'history/createBrowserHistory'
import rootReducer from '../services/index.js'
import promiseMiddleware from './promiseMiddleware'
import thunk from 'redux-thunk'
import createLogger from 'redux-logger'

export const history = createHistory()

const loggerMiddleware = createLogger({ collapsed: true })

const initialState = {}
const enhancers = []
const middleware = [
  routerMiddleware(history),
  promiseMiddleware,
  thunk,
  loggerMiddleware,
]

if (process.env.NODE_ENV === 'development') {
  const devToolsExtension = window.devToolsExtension

  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension())
  }
}

const composedEnhancers = compose(
  applyMiddleware(...middleware),
  ...enhancers
)

const store = createStore(
  rootReducer,
  initialState,
  composedEnhancers
)
export default store
