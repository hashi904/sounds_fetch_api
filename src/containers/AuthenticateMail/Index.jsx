import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { authenticateMail } from '../../actions/auth'
import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import MailOutlineIcon from '@material-ui/icons/MailOutline'
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
  const [email, setEmail] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [alertMessage, setAlertMessage] = useState('')
  const [isAlertOpen, setIsAlertOpen] = useState(false)

  const onChangeEmail = (e) => {
    const email= e.target.value
    setEmail(email)
  }

  const handleAuthenticateMail = (e) => {
    setIsLoading(true)
    e.preventDefault()
    dispatch(authenticateMail(email))
      .then((message) => {
        setIsLoading(false)
        console.log(message)
        props.history.push('/auth_mail_sent')
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
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <MailOutlineIcon />
        </Avatar>
        <Typography component='h1' variant='h5' children='ユーザー新規登録' />
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
            id='email'
            label='メールアドレス'
            name='email'
            autoComplete='email'
            autoFocus
            onChange={onChangeEmail}
          />
          { Loading(isLoading) }
          <Button
            type='submit'
            fullWidth
            variant='contained'
            color='secondary'
            className={classes.submit}
            disabled={isLoading}
            onClick={handleAuthenticateMail}
          >
            送信する
          </Button>
        </form>
      </div>
    </Container>
  )
}

export default Index
