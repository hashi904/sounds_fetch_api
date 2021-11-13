import {
  GET_UPDATE_USER_SUCCESS,
  GET_UPDATE_USER_FAIL,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_FAIL
} from '../actions/types'

import { UpdateUserServiceGetContents, UpdateUserServiceUserUpdate } from '../services/axios/updateUserService'

export const getUpdateUserContent = (token, id) => (dispatch) => {
  return UpdateUserServiceGetContents(token, id).then(
    (data) => {
      dispatch({
        type: GET_UPDATE_USER_SUCCESS,
        payload: {
          registration: data.data.registration,
          updateUser: data.data.user,
        }
      })

      return Promise.resolve(data)
    },
    (error) => {
      dispatch({
        type: GET_UPDATE_USER_FAIL,
        payload: { error: error }
      })

      return Promise.reject(error)
    }
  )
}

export const putUpdateUser = (token, id, formData) => (dispatch) => {
  return UpdateUserServiceUserUpdate(token, id, formData).then(
    (data) => {
      if(data) {
        dispatch({
          type: UPDATE_USER_SUCCESS,
          payload: { user: data }
        })

        return Promise.resolve(data)
      } else {
        dispatch({
          type: UPDATE_USER_FAIL,
          payload: { error: data }
        })
      }

      return Promise.reject(data)
    },
    (error) => {
      dispatch({
        type: UPDATE_USER_FAIL,
        payload: { error: error.response.data }
      })

      return Promise.reject(error)
    }
  )
}
