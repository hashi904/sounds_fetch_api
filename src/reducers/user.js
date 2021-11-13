import {
  GET_USER_SUCCESS,
  GET_USER_FAIL
} from '../actions/types'

const initialState = {}

const user = (state= initialState, action) => {
  const { type, payload } = action

  switch (type) {
    case GET_USER_SUCCESS:
      return {
        user: payload.user,
      }
    case GET_USER_FAIL:
      return {
        user: null
      }
    default:
      return state
  }
}

export default user
