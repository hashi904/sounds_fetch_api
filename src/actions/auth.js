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

import {
         AuthServiceGetRegistration,
         AuthServiceSignUp,
         AuthServiceSignIn,
         AuthServiceSignOut,
         AuthServiceAuthenticateMail,
         AuthServiceDeleteUser
       } from '../services/axios/authService'

export const getRegister = (token) => (dispatch) => {
  return AuthServiceGetRegistration(token).then(
    (data) => {
      dispatch({
        type: GET_REGISTRATION_SUCCESS,
        payload: {
          registration: data.registration,
          email: data.email
        }
      })
      return Promise.resolve(data)
    },
    (error) => {
      dispatch({
        type: GET_REGISTRATION_FAIL,
        payload: { error: error }
      })
      return Promise.reject(error)
    }
  )
}

export const signUp = (token, formData) =>  (dispatch) => {
  return AuthServiceSignUp(token, formData).then(
    (data) => {
      if(data.token){
        dispatch({
          type: SIGNUP_SUCCESS,
          payload: { user: data },
        })
      } else {
        dispatch({
          type: SIGNUP_FAIL,
          payload: { error: data },
        })

        return Promise.reject(data)
      }

      return Promise.resolve(data)
    },
    (error) => {
      dispatch({
        type: SIGNIN_FAIL,
        payload: { error: error.response.data },
      })

      return Promise.reject(error.response.data)
    }
  )
}

export const signIn = (email, password) => (dispatch) => {
  const signInDefaultErrorMessage = 'ログインに失敗しました。'

  return AuthServiceSignIn(email, password).then(
    (data) => {
      if(data) {
        dispatch({
          type: SIGNIN_SUCCESS,
          payload: { user: data },
        })
      } else {
        dispatch({
          type: SIGNIN_FAIL,
          payload: { error: data },
        })

        return Promise.reject(signInDefaultErrorMessage)
      }

      return Promise.resolve(data.message)
    },
    (error) => {
      const errorMessage = error.response.data.message ||
                           signInDefaultErrorMessage

      dispatch({
        type: SIGNIN_FAIL,
        payload: { error: errorMessage },
      })

      return Promise.reject(errorMessage)
    }
  )
}

export const authenticateMail = (email) => (dispatch) => {
  return AuthServiceAuthenticateMail(email).then(
    (data) => {
      const message = data.message
      return Promise.resolve(message)
    },
    (error) => {
      const errorMessage = error.response.data.message ||
                           '送信に失敗しました。しばらく経ってからやり直してください。'

      return Promise.reject(errorMessage)
    }
  )
}

export const signOut = (props) => (dispatch) => {
  AuthServiceSignOut(props)

  dispatch({
    type: SIGNOUT,
  })
}

export const deleteUser = (props, user_id, token) => (dispatch) => {
  AuthServiceDeleteUser(props, user_id, token).then(
    (data) => {
      const message = data.data.message
      dispatch({
        type: DELETE_USER_SUCCESS,
        payload: { message: message },
      })

      return Promise.resolve(message)
    },
    (error) => {
      dispatch({
        type: DELETE_USER_FAIL,
        payload: { error: error },
      })

      return Promise.reject(error)
    }
  )
}
