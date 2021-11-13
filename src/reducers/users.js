import {
  GET_USERS_SUCCESS,
  GET_USERS_FAIL,
  SEARCH_USERS_SUCCESS,
  SEARCH_USERS_FAIL
} from '../actions/types'

const initialState = {}

export const users = (state= initialState, action) => {
  const { type, payload } = action

  switch (type) {
    case GET_USERS_SUCCESS:
      return {
        users: payload.users,
        searchSelector: payload.searchSelector,
        current_page: payload.current_page,
        total_pages: payload.total_pages
      }
    case GET_USERS_FAIL:
      return {
        users: null,
        searchSelector: null
      }
    case SEARCH_USERS_SUCCESS:
      return {
        users: payload.users,
        searchSelector: payload.searchSelector,
        current_page: payload.current_page,
        total_pages: payload.total_pages
      }
    case SEARCH_USERS_FAIL:
      return {
        users: null,
        searchSelector: null
      }
    default:
      return state
  }
}

export default users
