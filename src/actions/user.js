import {
  GET_USER_SUCCESS,
  GET_USER_FAIL
} from '../actions/types'

import { UserServiceGetUserShowContent } from '../services/axios/userService'

const getUser = (id) => (dispatch) => {
  return UserServiceGetUserShowContent(id).then(
    (data) => {
      dispatch({
        type: GET_USER_SUCCESS,
        payload: { user: data.data }
      })
      return Promise.resolve(data)
    },
    (error) => {
      dispatch({
        type: GET_USER_FAIL,
        payload: { error: error }
      })
      return Promise.reject(error)
    }
  )
}

export default getUser