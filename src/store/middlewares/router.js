import createHistory from 'history/createBrowserHistory'
import { routerMiddleware } from 'react-router-redux'

const AppHistory = createHistory()
const middleware = routerMiddleware(AppHistory)

export default middleware

export {
  AppHistory
}
