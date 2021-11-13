import { combineReducers } from 'redux'
import auth from './auth'
import user from './user'
import users from './users'
import changePassword from './changePassword'
import updateUser from './updateUser'

export default combineReducers({
  auth,
  updateUser,
  user,
  users,
  changePassword
})
