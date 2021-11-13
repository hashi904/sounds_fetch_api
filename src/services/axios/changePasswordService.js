import axios from 'axios'
import apiUrl from './../apiUrl'

// パスワード変更
export const ChangePasswordServicePostNewPassword = (token, changePasswordParams) => {
  return axios
    .put(apiUrl + '/change_password/confirmation',
      changePasswordParams, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
}
