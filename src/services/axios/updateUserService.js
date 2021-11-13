import axios from 'axios'
import apiUrl from './../apiUrl'

export const UpdateUserServiceGetContents = (token, id) => {
  return axios
    .get(apiUrl + 'registration/' + id + '/edit',
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    )
}

export const UpdateUserServiceUserUpdate = (token, id, formData) => {
  const header = {headers:{
    Authorization: `Bearer ${token}`,
    'content-type': 'multipart/form-data'
    }
  }

  return axios
    .put(apiUrl + 'registration/' + id,
          formData,
          header)
    .then((response) => {
      return response.data
    })
}
