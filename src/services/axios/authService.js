import axios from 'axios'
import apiUrl from './../apiUrl'
import removeJwtFromLocalStrage from './../authenticate/removeJwtFromLocalStrage'

export const AuthServiceGetRegistration = (token) => {
  return axios
    .get(apiUrl + 'registration' + '?token=' + token)
    .then((response) => {
      if (response.data.token) {
        localStorage.setItem('user', JSON.stringify(response.data))
      }

      return response.data
    })
}

export const AuthServiceSignUp = (token, formData) => {
  const header = {headers: {'content-type': 'multipart/form-data'}}

  return axios
    .post(apiUrl + 'registration' + '?token=' + token,
          formData,
          header)
    .then((response) => {
      if (response.data.token) {
        localStorage.setItem('user', JSON.stringify(response.data))
      }

      return response.data
    })
}

export const AuthServiceSignIn = (email, password) => {
  return axios
    .post(apiUrl + 'sign_in/', {
      email: email,
      password: password,
    })
    .then((response) => {
      if (response.data.token) {
        localStorage.setItem('user', JSON.stringify(response.data))
      }

      return response.data
    })
}

export const AuthServiceAuthenticateMail = (email) => {
  return axios
    .post(apiUrl + 'authenticate_mail/', {
      registration: {
        email: email
      }
    })
    .then((response) => {
      return response.data
    })
}

export const AuthServiceSignOut = (props) => {
  removeJwtFromLocalStrage()
  props.history.push('/top')
  window.location.reload()
}

export const AuthServiceDeleteUser = (props, user_id, token) => {
  return axios
    .delete(apiUrl + 'registration/' + user_id,
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
    .then((response) => {
      if (response.status === 200) {
        removeJwtFromLocalStrage()
        props.history.push('/top')
        window.location.reload()
      }

      return response.data
    })
}
