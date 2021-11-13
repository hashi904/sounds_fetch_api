const createPageQuery = (condition) => {
  let pageQuery

  if(condition){
    pageQuery = '&page='
  } else {
    pageQuery = '?page='
  }

  return pageQuery
}

export default createPageQuery
