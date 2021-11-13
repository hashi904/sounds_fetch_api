import {
  CHANGE_MAIL_SUCCESS,
  CHANGE_MAIL_FAIL
} from '../actions/types'
import { ChangeMailServicePostNewMail,
         ChangeMailServiceConfirm } from '../services/axios/changeMailService'
import removeJwtFromLocalStrage from './../services/authenticate/removeJwtFromLocalStrage'

export const changeMail = (token, changeMailParams) => (dispatch) => {
  const errorMessage = 'ユーザーは不正です。ログインし直してください'

  const dispatchChangeMailSuccess = (message) => {
    dispatch({
      type: CHANGE_MAIL_SUCCESS,
      payload: { message: message }
    })
  }

  const dispatchChangeMailFail = (message) => {
    dispatch({
      type: CHANGE_MAIL_FAIL,
      payload: { message: message }
    })
  }

  return ChangeMailServicePostNewMail(token, changeMailParams).then(
    (data) => {
      if(!data){
        dispatchChangeMailFail()
        return Promise.reject(errorMessage)
      }

      dispatchChangeMailSuccess(data.message)
      return Promise.resolve(data.message)
    },
    (error) => {
      const message =
        error.response.data.message || errorMessage
      
      if(error.response.status === 401){
        removeJwtFromLocalStrage()
      }

      dispatchChangeMailFail(message)
      return Promise.reject(message)
    }
  )
}

export const changeMailConfirm = (token) => (dispatch) => {
  const errorMessage = 'リクエストが不正です。'

  return ChangeMailServiceConfirm(token).then(
    (data) => {
      if(!data){
        return Promise.reject(errorMessage)
      }
      return Promise.resolve(data.data)
    },
    (error) => {
      const message =
        error.response.data.message || errorMessage

      return Promise.reject(message)
    }
  )
}

