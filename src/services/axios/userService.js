import axios from 'axios'
import apiUrl from './../apiUrl'
import createPageQuery from './../users/search/createPageQuery'

// ユーザー一覧
export const UserServiceGetUsetsContent = (page) => {
  const requestUrl = page ? 'users/?page=' + page : 'users'

  return axios
    .get(apiUrl + requestUrl)
}

// ユーザー詳細情報
export const UserServiceGetUserShowContent = (id) => {
  return axios
    .get(apiUrl + 'users/' + id)
}

// ユーザー検索
export const UserServiceSearchUsersContent = (condition, page) => {
  const pageQuery = createPageQuery(condition)

  condition += page ? pageQuery + page : pageQuery + '=1'

  return axios
    .get(apiUrl + 'search/' + condition)
}
