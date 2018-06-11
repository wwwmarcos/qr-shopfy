import { combineReducers } from 'redux'
import router from './router'
import facebookLogin from './facebookLogin'

export default combineReducers({
  router,
  facebookLogin
})
