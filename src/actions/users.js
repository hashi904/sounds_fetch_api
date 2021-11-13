import {
  GET_USERS_SUCCESS,
  GET_USERS_FAIL,
  SEARCH_USERS_SUCCESS,
  SEARCH_USERS_FAIL
} from '../actions/types'

import { UserServiceGetUsetsContent, UserServiceSearchUsersContent } from '../services/axios/userService'

export const getUsers = (page) => (dispatch) => {
  return UserServiceGetUsetsContent(page).then(
    (data) => {
      dispatch({
        type: GET_USERS_SUCCESS,
        payload: {
          users: data.data.users,
          searchSelector: data.data.search,
          current_page: data.data.current_page,
          total_pages: data.data.total_pages
        },
      })

      return Promise.resolve(data)
    },
    (error) => {
      dispatch({
        type: GET_USERS_FAIL,
        payload: { error: error },
      })

      return Promise.reject(error)
    }
  )
}

export const searchUsers = (condition, page) => (dispatch) => {
  return UserServiceSearchUsersContent(condition, page).then(
    (data) => {
      dispatch({
        type: SEARCH_USERS_SUCCESS,
        payload: {
          users: data.data.users,
          searchSelector: data.data.search,
          current_page: data.data.current_page,
          total_pages: data.data.total_pages
        },
      })

      return Promise.resolve(data)
    },
    (error) => {
      dispatch({
        type: SEARCH_USERS_FAIL,
        payload: { error: error },
      })

      return Promise.reject(error)
    }
  )
}
