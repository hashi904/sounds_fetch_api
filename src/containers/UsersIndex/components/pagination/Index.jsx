import React from 'react'
import { Route } from 'react-router'
import { Link } from 'react-router-dom'
import Pagination from '@material-ui/lab/Pagination'
import PaginationItem from '@material-ui/lab/PaginationItem'
import createPageQuery from '../../../../services/users/search/createPageQuery'

const PaginationLink = (props) => {
  const handlePage = (page) => {
    props.setPage(page)
    // ページ最上部にスクロールし、擬似的にページが移動したように見せる
    window.scrollTo(0, 0)
  }
  return (
    <Route>
      {() => {
        const query = new URLSearchParams(document.location.search)
        const page = parseInt(query.get('page') || '1', 10)
        const pageQuery = createPageQuery(props.condition)

        return (
          <Pagination
            page={page}
            count={parseInt(props.totalPages)}
            variant='outlined'
            color='secondary'
            renderItem={(item) => (
              <PaginationItem
                component={Link}
                to={`/users${item.page === 1 ? `${props.condition}` : `${props.condition}${pageQuery}${item.page}`}`}
                onClick={handlePage(page)}
                {...item}
              />
            )}
          />
        )
      }}
    </Route>
  )
}

export default PaginationLink
