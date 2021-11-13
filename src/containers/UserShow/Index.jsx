import React, { useEffect, useState }  from 'react'
import { useDispatch } from 'react-redux'
import Box from '@material-ui/core/Box'
import UserProfileImageCard from './components/UserProfileImageCard'
import UserProfileIntroductionCard from './components/UserProfileIntroductionCard'
import UserProfileBasicProfileCard from './components/UserProfileBasicProfileCard'
import UserProfileInstrumentSkillCard from './components/UserProfileInstrumentSkillCard'
import UserProfileTasteCard from './components/UserProfileTasteCard'
import UserProfileActivityCard from './components/UserProfileActivityCard'
import Grid from '@material-ui/core/Grid'
import Hidden from '@material-ui/core/Hidden/index'
import Container from '@material-ui/core/Container'
import getPageNumber from './../../services/url/getPageNumber'
import getUser from './../../actions/user'

const Index = (props) => {
  const [user, setUser] = useState('')
  const dispatch = useDispatch()
  const constantVariable = 'SoundsFetch'
  let errorMessage = '読み込みに失敗しました。再読み込みしてください。'
  const currentPageNumber = getPageNumber(window.location.href)

  useEffect(() => {
    dispatch(getUser(currentPageNumber)).then(
      (response) => {
        if (!response.data) {
          return errorMessage
        }
        // ユーザーidが存在しない場合はユーザー一覧にリダイレクト
        if (!response.data.user){
          props.history.push('/users')
          window.location.reload()
          return
        }
        setUser(response.data)
      },
      (error) => {
        errorMessage = error.response.data.message || errorMessage
      }
    )
  }, [constantVariable])

  return (
    <Container>
      <Grid container justify='center' alignItems='center'>
        {/* For LeftDrawer */}
        <Hidden mdDown>
          <Grid item xs={2}>
          </Grid>
        </Hidden>

        {/* PC用レイアウト */}
        <Hidden xsDown>
          <Grid item xs={10}>
            <Box display='flex' flexDirection='column' alignItems='center' mt={10}>
              <Box display='flex'>
                <Box m={3} >
                  <Box>
                    <UserProfileImageCard user = {user} />
                  </Box>
                  <Box mt={1}>
                    <UserProfileIntroductionCard user = {user} />
                  </Box>
                </Box>
                <Box m={3} >
                  <Box>
                    <UserProfileBasicProfileCard user = {user} />
                  </Box>
                  <Box mt={1}>
                    <UserProfileInstrumentSkillCard user = {user} />
                  </Box>
                  <Box mt={1}>
                    <UserProfileTasteCard user = {user} />
                  </Box>
                  <Box mt={1}>
                    <UserProfileActivityCard user = {user} />
                  </Box>
                </Box>
              </Box>
            </Box>
          </Grid>
        </Hidden>

        {/* スマホ用レイアウト */}
        <Hidden smUp>
          <Grid item xs={12}>
            <Box display='flex' flexDirection='column' mt={12} alignItems='center'>
              <Box display='flex'>
                <Box m={3} >
                  <Box>
                    <UserProfileImageCard user = {user} />
                  </Box>
                  <Box mt={1}>
                    <UserProfileIntroductionCard user = {user} />
                  </Box>
                  <Box mt={1}>
                    <UserProfileBasicProfileCard user = {user} />
                  </Box>
                  <Box mt={1}>
                    <UserProfileInstrumentSkillCard user = {user} />
                  </Box>
                  <Box mt={1}>
                    <UserProfileTasteCard user = {user} />
                  </Box>
                  <Box mt={1}>
                    <UserProfileActivityCard user = {user} />
                  </Box>
                </Box>
              </Box>
            </Box>
          </Grid>
        </Hidden>
      </Grid>
    </Container>
  )
}

export default Index
