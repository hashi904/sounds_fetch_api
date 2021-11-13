import {
  GET_REGISTRATION_SUCCESS,
  GET_REGISTRATION_FAIL,
  SIGNUP_SUCCESS,
  SIGNUP_FAIL,
  SIGNIN_SUCCESS,
  SIGNIN_FAIL,
  SIGNOUT,
  DELETE_USER_SUCCESS,
  DELETE_USER_FAIL
} from '../actions/types'

const user = JSON.parse(localStorage.getItem('user'))

const initialState = user
  ? { isLoggedIn: true, user }
  : { isLoggedIn: false, user: null }

const auth = (state = initialState, action) => {
  const { type, payload } = action

  switch (type) {
    case GET_REGISTRATION_SUCCESS:
      return {
        ...state,
        registration: payload.registration,
        email: payload.email
      }
    case GET_REGISTRATION_FAIL:
      return {
        ...state,
        error: payload.error,
      }
    case SIGNIN_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        user: payload.user,
      }
    case SIGNIN_FAIL:
      return {
        ...state,
        isLoggedIn: false,
        user: null,
      }
    case SIGNUP_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        user: payload.user,
      }
    case SIGNUP_FAIL:
      return {
        ...state,
        isLoggedIn: false,
        user: null,
      }
    case SIGNOUT:
      return {
        ...state,
        isLoggedIn: false,
        user: null,
      }
    case DELETE_USER_SUCCESS:
      return {
        ...state,
        isLoggedIn: false,
        user: null,
      }
    case DELETE_USER_FAIL:
      return state
    default:
      return state
  }
}

export default auth
