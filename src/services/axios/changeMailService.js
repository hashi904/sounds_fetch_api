import axios from 'axios'
import apiUrl from './../apiUrl'

export const ChangeMailServiceGetContent = (token) => {
  return axios
    .get(apiUrl + 'change_mail/', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
}

export const ChangeMailServicePostNewMail = (token, changeMailParams) => {
  return axios
    .post(apiUrl + 'change_mail/',
      changeMailParams, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
}

export const ChangeMailServiceConfirm = (token) => {
  return axios
    .get(apiUrl + 'change_mail/confirmation/?token=' + token, {
    })
}
