import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUpdateUserContent, putUpdateUser } from './../../actions/updateUser'
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import Container from '@material-ui/core/Container'
import Button from '@material-ui/core/Button'
import CssBaseline from '@material-ui/core/CssBaseline'
import InputPrefecture from './components/InputPrefecture'
import InputInstrumentType from './components/InputInstrumentType'
import InputExperience from './components/InputExperience'
import InputLiveExperience from './components/InputLiveExperience'
import InputSkillLevel from './components/InputSkillLevel'
import InputActiveDate from './components/InputActiveDate'
import InputGenre from './components/InputGenre'
import InputProfileImage from './components/InputProfileImage'
import InputTweet from './components/InputTweet'
import InputIntroduction from './components/InputIntroduction'
import { Typography } from '@material-ui/core'
import Hidden from '@material-ui/core/Hidden'
import redirectForUnAuthorization from '../../services/redirect/redirectForUnAuthorization'
import ErrorAlert from '../../components/basic/Alert/ErrorAlert'
import updateUserJson from '../../services/json/user/update'
import getPrefectureByName from '../../services/model/prefecture'
import Loading from '../../services/ajaxEffect/loading'

const Index = (props) => {
  const [selectorValue, setSelectorValue] = useState('')
  const [updateUser , setUpdateUser] = useState('')
  const [prefecture, setPrefecture] = useState('')
  const [tweet, setTweet] = useState('')
  const [introduction , setIntroduction] = useState('')
  const [profileImage, setProfileImage] = useState('')
  const [instrumentType, setInstrumentType] = useState('')
  const [experience, setExperience] = useState('')
  const [skillLevel, setSkillLevel] = useState('')
  const [liveExperience, setLiveExperience] = useState('')
  const [genre, setGenre] = useState('')
  const [activeDate, setActiveDate] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [alertMessage, setAlertMessage] = useState('')
  const [isAlertOpen, setIsAlertOpen] = useState(false)

  const dispatch = useDispatch()
  const token = useSelector((state) => state.auth.user.token)
  const userId = useSelector((state) => state.auth.user.user_id)
  const constantVariable = 'SoundsFetch'
  let errorMessage = '読み込みに失敗しました。再読み込みしてください。'

  useEffect(() => {
    dispatch(getUpdateUserContent(token, userId)).then(
      (response) => {
        if (!response.data.user || !response.data.registration) {
          return errorMessage
        }
        setUpdateUser(response.data.user)
        setSelectorValue(response.data.registration)
      },
      (error) => {
        errorMessage = error.message || errorMessage

        if(error.response.status === 401){
          redirectForUnAuthorization(props)
        }
      }
    )
  }, [constantVariable])

  // 更新ユーザーの初期値投入 
  // note 画像データは都度送信すると負荷がかかるため、変更した場合のみ対応
  // そのため画像は初期値投入しない
  useEffect(() => {
    if(!updateUser){ return }
    setPrefecture(getPrefectureByName(updateUser.user?.prefecture))
    setIntroduction(updateUser.user?.introduction)
    setTweet(updateUser.user?.tweet)
    setInstrumentType(updateUser.instruments[0].instrument_type_id)
    setExperience(updateUser.instruments[0].experience)
    setSkillLevel(updateUser.instruments[0].skill_level)
    setLiveExperience(updateUser.instruments[0].live_experience[0].live_experience_id)
    setGenre(genreIds(updateUser.music_categories))
    setActiveDate(updateUser.active_dates[0].date)
  }, [updateUser])

  const genreIds = (genres) => {
    let array = []
    for(const genre of genres) {
      array.push(genre.id)
    }

    return array
  }

  const updateUserObj =  updateUserJson(updateUser,
                                       prefecture,
                                       instrumentType,
                                       experience,
                                       skillLevel,
                                       liveExperience,
                                       genre,
                                       activeDate,
                                       tweet,
                                       introduction)

  const handleSubmit = (e) => {
    e.preventDefault()
    const formData = new FormData()
    if(profileImage) { formData.append('image', profileImage) }
    formData.append('registration', JSON.stringify(updateUserObj))
    setIsLoading(true)

    dispatch(putUpdateUser(token, userId, formData)).then(
      (response) => {
        setIsLoading(false)
        props.history.push('/users')
        window.location.reload()
      },
      (error) => {
        errorMessage = error?.message || errorMessage
        setIsLoading(false)
        setIsAlertOpen(true)
        setAlertMessage(errorMessage)
      }
    )
  }

  return (
    <Container>
      <CssBaseline />
      <Grid container justify='center' alignItems='center'>

        {/* For LeftDrawer */}
        <Hidden mdDown>
          <Grid item xs={2} smDown>
          </Grid>
        </Hidden>

        <Box display='flex' flexDirection='column' alignItems='center' mt={13} >
          <Typography children='基本情報を変更する' variant='h5' />
          <Box display='flex' flexDirection='column' alignItems='center' >
            <InputPrefecture
              setPrefecture = {setPrefecture}
              updateUser = {updateUser}
            />
            <InputProfileImage
              updateUser = {updateUser}
              setProfileImage = {setProfileImage}
            />
            <InputTweet
              tweet = { tweet }
              setTweet = {setTweet}
            />
            <InputIntroduction
              introduction = {introduction}
              setIntroduction = {setIntroduction}
            />
            <InputActiveDate
              setActiveDate = {setActiveDate}
              updateUser = {updateUser}
              selectorValue = {selectorValue}
            />
            <InputGenre
              setGenre = {setGenre}
              updateUser = {updateUser}
              selectorValue = {selectorValue}
            />
          </Box>
          <Box display='flex' flexDirection='column' alignItems='center' mt={5} mb={3}>
            <Typography
                children='楽器情報を変更する'
                variant='h5'
            />
            <InputInstrumentType
              setInstrumentType = {setInstrumentType}
              updateUser = {updateUser}
              selectorValue = {selectorValue}
            />
            <InputExperience
              setExperience = {setExperience}
              updateUser = {updateUser}
              selectorValue = {selectorValue}
            />
            <InputLiveExperience
              setLiveExperience = {setLiveExperience}
              updateUser = {updateUser}
              selectorValue = {selectorValue}
            />
            <InputSkillLevel
              setSkillLevel = {setSkillLevel}
              updateUser = {updateUser}
              selectorValue = {selectorValue}
            />
          </Box>
          <ErrorAlert
              message = {alertMessage}
              open = {isAlertOpen}
          />
          <Box mb={5}>
          { Loading(isLoading) }
            <Button
              children='送信'
              variant='contained'
              color='secondary'
              type='submit'
              disabled={isLoading}
              onClick={handleSubmit}
            />
          </Box>
        </Box>
      </Grid>
    </Container>
  )
}

export default Index
