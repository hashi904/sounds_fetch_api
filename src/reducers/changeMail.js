import {
  CHANGE_MAIL_SUCCESS,
  CHANGE_MAIL_FAIL
} from '../actions/types'

const initialState = {}

const changeMail = (state = initialState, action) => {
  const { type, payload } = action

  switch (type) {
    case CHANGE_MAIL_SUCCESS:
      return {
        ...state,
        changeMail: payload.message,
      }
    case CHANGE_MAIL_FAIL: 
      return {
        ...state,
        changeMail: payload.message,
      }
    default:
      return state
  }
}

export default changeMail
