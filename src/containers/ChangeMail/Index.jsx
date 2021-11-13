import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { ChangeMailServiceGetContent } from '../../services/axios/changeMailService'
import { changeMail } from './../../actions/changeMail'
import redirectForUnAuthorization from '../../services/redirect/redirectForUnAuthorization'
import Box from '@material-ui/core/Box'
import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
import CssBaseline from '@material-ui/core/CssBaseline'
import TextField from '@material-ui/core/TextField'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import Loading from '../../services/ajaxEffect/loading'
import ErrorAlert from '../../components/basic/Alert/ErrorAlert'

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(10),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}))

const Index = (props) => {
  const classes = useStyles()
  const dispatch = useDispatch()
  const token = useSelector((state) => state.auth.user.token)
  const [email, setEmail] = useState('')
  const [newEmail, setNewEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [alertMessage, setAlertMessage] = useState('')
  const [isAlertOpen, setIsAlertOpen] = useState(false)

  const onChangeNewEmail = (e) => {
    const newEmail= e.target.value
    setNewEmail(newEmail)
  }

  const onChangePassword = (e) => {
    const password = e.target.value
    setPassword(password)
  }

  useEffect(() => {
    ChangeMailServiceGetContent(token).then(
      (response) => {
        setEmail(response.data.email)
      },
      (error) => {
        const errorMessage =
          error.response.data.message || 'ユーザーが不正です。ログインし直してください。'

        if(error.response.status === 401){
          redirectForUnAuthorization(props)
        }

        // todo error メッセージを次のコンポーネントに渡す or reduxに保存しておく
        props.history.push('/sign_in')
        window.location.reload()
      }
    )
  }, [])

  const handleChangeMail = (e) => {
    setIsLoading(true)
    const changeMailParams =
      {
        change_mail: {
          email:        email,
          change_email: newEmail,
          password:     password
        }
      }

    e.preventDefault()
    dispatch(changeMail(token, changeMailParams))
      .then((message) => {
        setIsLoading(false)
        console.log(message)
        props.history.push('/users')
        window.location.reload()
      })
      .catch((errorMessage) => {
        setIsLoading(false)
        setIsAlertOpen(true)
        setAlertMessage(errorMessage)
        console.log(errorMessage)
      })
  }

  return (

    <Container component='main' maxWidth='xs'>
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component='h1' variant='h5'>
          Change Email
        </Typography>
        <Box mt={1}>
        <Typography children='現在のメールアドレス'/>
        {email}
      </Box>
        <form className={classes.form} noValidate>
          <ErrorAlert
            message = {alertMessage}
            open = {isAlertOpen}
          />
          <TextField
            variant='outlined'
            margin='normal'
            required
            fullWidth
            id='newEmail'
            label='新しいメールアドレス'
            name='newEmail'
            autoComplete='email'
            autoFocus
            onChange={onChangeNewEmail}
          />
          <TextField
            variant='outlined'
            margin='normal'
            required
            fullWidth
            name='password'
            label='パスワード'
            type='password'
            id='password'
            autoComplete='current-password'
            onChange={onChangePassword}
          />
          { Loading(isLoading) }
          <Button
            type='submit'
            fullWidth
            variant='contained'
            color='primary'
            className={classes.submit}
            disabled={isLoading}
            onClick={handleChangeMail}
          >
            メールを変更する
          </Button>
        </form>
      </div>
    </Container>
  )
}

export default Index
