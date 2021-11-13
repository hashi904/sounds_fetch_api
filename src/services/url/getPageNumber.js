// get page number
// ex) 'http://localhost:3220/user/detail/1' => return '1'

const getPageNumber = (url) => {
  // return string number
  return url.match(/\/detail\/(\d*)/)[1]
}

export default getPageNumber