import {
  GET_UPDATE_USER_SUCCESS,
  GET_UPDATE_USER_FAIL,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_FAIL

} from '../actions/types'

const initialState = {}

const updateUser = (state= initialState, action) => {
  const { type, payload } = action

  switch(type) {
    case GET_UPDATE_USER_SUCCESS:
      return {
        registration: payload.registration,
        updateUser: payload.updateUser
      }
    case GET_UPDATE_USER_FAIL:
      return {
        error: payload.error
      }
    case UPDATE_USER_SUCCESS:
      return {
        message: 'user update success'
      }
    case UPDATE_USER_FAIL:
      return {
        message: payload.error
      }
    default:
      return state
  }
}

export default updateUser
