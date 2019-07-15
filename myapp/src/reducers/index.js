import {
  combineReducers
} from 'redux'
import name_reducers from './name_reducers'
import auth_reducers from './auth_reducers'

export default combineReducers({
  name_reducers,auth_reducers
})