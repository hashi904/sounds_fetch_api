import {
  CHANGE_PASSWORD_SUCCESS,
  CHANGE_PASSWORD_FAIL
} from '../actions/types'

const initialState = {}

const changePassword = (state= initialState, action) => {
  const { type, payload } = action

  switch (type) {
    case CHANGE_PASSWORD_SUCCESS:
      return {
        changePasswordMessage: payload.changePasswordMessage,
      }
    case CHANGE_PASSWORD_FAIL:
      return {
        changePasswordMessage: null
      }
    default:
      return state
  }
}

export default changePassword
