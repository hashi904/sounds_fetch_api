// get query string
// example: http://www.example.com?a=&b=1 => getParam('b') // '1'
export const getUrlQueries = (name) => {
  const url = window.location.href
  name = name.replace(/[\[\]]/g, "\\$&")

  const regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)')
  const results = regex.exec(url)

  if (!results) return null
  if (!results[2]) return ''

  return decodeURIComponent(results[2].replace(/\+/g, ' '))
}
