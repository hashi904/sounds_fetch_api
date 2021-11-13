import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import Container from '@material-ui/core/Container'
import Button from '@material-ui/core/Button'
import CssBaseline from '@material-ui/core/CssBaseline'
import InputNickname from './components/InputNickname'
import InputBirthday from './components/InputBirthday'
import InputPrefecture from './components/InputPrefecture'
import InputInstrumentType from './components/InputInstrumentType'
import InputExperience from './components/InputExperience'
import InputLiveExperience from './components/InputLiveExperience'
import InputSkillLevel from './components/InputSkillLevel'
import InputPassword from './components/InputPassword'
import InputPasswordConfirm from './components/InputPasswordConfirm'
import InputActiveDate from './components/InputActiveDate'
import InputGenre from './components/InputGenre'
import InputSex from './components/InputSex'
import InputProfileImage from './components/InputProfileImage'
import InputTweet from './components/InputTweet'
import InputIntroduction from './components/InputIntroduction'
import { Typography } from '@material-ui/core'
import { signUp, getRegister } from './../../actions/auth'
import createMusicGenreArray from './../../services/user/auth/createMusicGenreArray'
import { signUpValdate } from '../../services/validate/user/signUpValidate'
import Loading from '../../services/ajaxEffect/loading'
import ErrorAlert from '../../components/basic/Alert/ErrorAlert'

const Index = (props) => {
  const dispatch = useDispatch()

  const [nickname, setNickname] = useState('')
  const [password, setPassword] = useState('')
  const [passwordConfirm, setPasswordConfirm] = useState('')
  const [sex, setSex] = useState('')
  const [birthday, setBirthday] = useState('')
  const [introduction , setIntroduction] = useState('')
  const [tweet, setTweet] = useState('')
  const [prefecture, setPrefecture] = useState('')
  const [profileImage, setProfileImage] = useState('')
  const [activeDate, setActiveDate] = useState('')
  const [genres, setGenres] = useState('')
  const [instrumentType, setInstrumentType] = useState('')
  const [experience, setExperience] = useState('')
  const [skillLevel, setSkillLevel] = useState('')
  const [liveExperience, setLiveExperience] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const storedEmail = useSelector((state) => state.auth.email)
  const email = storedEmail ? storedEmail : ''

  const storedSelectorValue = useSelector((state) => state.auth.registration)
  const selectorValue = storedSelectorValue ? storedSelectorValue : []

  const query = new URLSearchParams(document.location.search)
  const token = encodeURIComponent(query.get('token'))

  const [alertMessage, setAlertMessage] = useState('')
  const [isAlertOpen, setIsAlertOpen] = useState(false)

  const constantVariable = 'SoundsFetch'
  let errorMessage = '読み込みに失敗しました。再読み込みしてください。'

  useEffect(() => {
    dispatch(getRegister(token)).then(
      (response) => {
        if (!response.data) {

          return errorMessage
        }
      },
      (error) => {
        errorMessage = error.message || errorMessage

        return errorMessage
      }
    )
  }, [constantVariable]) 

  const handleSubmit = () => {
    const formData = new FormData()
    formData.append('image', profileImage)
    formData.append('registration', JSON.stringify(registration))

    const validateMessages = signUpValdate(password, passwordConfirm)
    if(validateMessages.passwordConfirm){
      setIsAlertOpen(true)
      setAlertMessage(validateMessages.passwordConfirm)
      return
    }
    setIsLoading(true)

    dispatch(signUp(token, formData)).then(
      (response) => {
        if (!response.user) {

          return errorMessage
        }
        setIsLoading(false)
        props.history.push('/users')
        window.location.reload()
      },
      (error) => {
        errorMessage = error?.message || errorMessage
        setIsLoading(false)
        setIsAlertOpen(true)
        setAlertMessage(errorMessage)
        return errorMessage
      }
    )
  }

  // todo ファイルは移動する serivces/json/register.js
  const registration = {
    user: {
      nickname: nickname,
      email: email,
      password: password,
      sex: sex,
      birth_year: birthday[0],
      birth_month: birthday[1],
      birth_day: birthday[2],
      introduction: introduction,
      tweet: tweet,
      prefecture_id: prefecture,
      user_active_dates_attributes: [
        {
          date: activeDate
        }
      ]
    },
    music_categories: createMusicGenreArray(genres),
    instruments: [
      {
        instrument_type_id: instrumentType,
        experience: experience,
        skill_level: skillLevel,
        position: 1,
        live_experiences: [
          {
            live_experience_id: liveExperience
          }
        ]
      }
    ]
  }

  return (
    <Container>
      <CssBaseline />
      <Grid container justify='center' alignItems='center'>
        <Box display='flex' flexDirection='column' alignItems='center' mt={13} >
          <Typography children='基本情報を入力する' variant='h5' />
          <Box display='flex' flexDirection='column' alignItems='center' >
            <InputNickname setNickname = {setNickname} />
            <InputBirthday setBirthday = {setBirthday} />
            <InputPassword setPassword = {setPassword} />
            <InputPasswordConfirm setPasswordConfirm = {setPasswordConfirm} />
            <InputSex setSex = {setSex} />
            <InputPrefecture setPrefecture = {setPrefecture} />
            <InputProfileImage setProfileImage = {setProfileImage} />
            <InputTweet setTweet = {setTweet} />
            <InputIntroduction setIntroduction = {setIntroduction} />
          </Box>
          <Box display='flex' flexDirection='column' alignItems='center' mt={5} mb={3}>
          <Typography children='楽器情報を入力する' variant='h5' />
            <InputInstrumentType selectorValue = {selectorValue} setInstrumentType = {setInstrumentType} />
            <InputExperience selectorValue = {selectorValue} setExperience = {setExperience} />
            <InputLiveExperience selectorValue = {selectorValue} setLiveExperience = {setLiveExperience} />
            <InputSkillLevel selectorValue = {selectorValue} setSkillLevel = {setSkillLevel} />
            <InputActiveDate selectorValue = {selectorValue} setActiveDate = {setActiveDate} />
            <InputGenre selectorValue = {selectorValue} setGenres = {setGenres} />  
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
