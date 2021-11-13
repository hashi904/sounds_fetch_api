import {
  CHANGE_PASSWORD_SUCCESS,
  CHANGE_PASSWORD_FAIL
} from '../actions/types'

import { ChangePasswordServicePostNewPassword } from '../services/axios/changePasswordService'

export const changePassword = (token, changePasswordParams) => (dispatch) => {
  return ChangePasswordServicePostNewPassword(token, changePasswordParams).then(
    (data) => {
      dispatch({
        type: CHANGE_PASSWORD_SUCCESS,
        payload: { changePasswordMessage: data.data.message }
      })
      return Promise.resolve(data)
    },
    (error) => {
      dispatch({
        type: CHANGE_PASSWORD_FAIL,
        payload: { error: error }
      })
      return Promise.reject(error)
    }
  )
}
