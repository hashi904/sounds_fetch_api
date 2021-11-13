import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { searchUsers } from './../../actions/users'
import { makeStyles } from '@material-ui/core/styles'
import UserCard from './components/UserCard'
import Container from '@material-ui/core/Container'
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import Hidden from '@material-ui/core/Hidden'
import Divider from '@material-ui/core/Divider'
import Pagination from './components/pagination/Index'
import SearchArea from '../../components/users/search/Index'
import createCondition from '../../services/users/search/createCondition'
import Loading from '../../services/ajaxEffect/loading'

const useStyles = makeStyles((theme) => ({
  bold: {
    fontWeight: 600,
  },
}))

// ページ移動した時にuseEffectを発火させるために必要な変数
const query = new URLSearchParams(document.location.search)
const initialPage = parseInt(query.get('page') || '1', 10)

const textCondition = query.get('text') || ''
const instrumentTypeCondition = query.get('instrument_type') || ''
const initialCondition = createCondition(textCondition, instrumentTypeCondition, initialPage)

const Index = () => {
  const [users, setUsers] = useState([])
  const [totalPages, setTotalPages] = useState(1)
  const [page, setPage] = useState(initialPage)
  const [condition, setCondition] = useState(initialCondition)
  const [searchSelector, setSearchSelector] = useState([])
  const [noResultMessage, setNoResultMessage] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const dispatch = useDispatch()
  let errorMessage = '読み込みに失敗しました。再読み込みしてください。'

  useEffect(() => {
    setIsLoading(true)
    dispatch(searchUsers(condition, page)).then(
      (response) => {
        setSearchSelector(response.data.search)
        setIsLoading(false)
        if(response.data.users.length === 0){
          setUsers([])
          setTotalPages(1)
          setNoResultMessage('検索結果は0件です。')

          return
        }

        if(!response.data.users){
          return errorMessage
        }

        setUsers(response.data.users)
        setTotalPages(response.data.total_pages)
        setNoResultMessage('')

        if(response.data.current_page > response.data.total_pages){
          window.location.href = '/users' + condition
        }
      },
      (error) => {
        setIsLoading(false)
        errorMessage = error.response.data.message || errorMessage
      }
    )
  }, [condition, page])

  const classes = useStyles()

  return (
    <Container>
      <Grid container justify='center' alignItems='center'>

        {/* For LeftDrawer */}
        <Hidden mdDown>
          <Grid item xs={2} smDown>
          </Grid>
        </Hidden>

        <Grid item xs={10}>
          <SearchArea
            setCondition = {setCondition}
            initFreeWord = {textCondition}
            initInstrumentType = {instrumentTypeCondition}
            condition={condition}
            searchSelector = {searchSelector}
          />
          <Box children={<Divider />} mt={1} />
          { Loading(isLoading) }
          <Box 
            display='flex'
            flexDirection='column' 
            alignItems='center' 
            mt={0}
          >
            <Box display='flex'
              flexWrap='wrap' 
              alignItems='center' 
            >
              {users.map((user) => (
                <Box m={3}>
                  <UserCard user = {user} />
                </Box>
              ))}
              { noResultMessage ? noResultMessage : '' }
            </Box>
            <Box mb={3}>
              <Pagination
                totalPages={totalPages}
                setPage={setPage}
                condition={condition}
              />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Container>
  )
}

export default Index
