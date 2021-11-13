import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { signIn } from '../../actions/auth'
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
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [alertMessage, setAlertMessage] = useState('')
  const [isAlertOpen, setIsAlertOpen] = useState(false)

  const dispatch = useDispatch()

  const classes = useStyles()

  const onChangeEmail = (e) => {
    const email= e.target.value
    setEmail(email)
  }

  const onChangePassword = (e) => {
    const password = e.target.value
    setPassword(password)
  }

  const handleSignIn = (e) => {
    setIsLoading(true)
    e.preventDefault()
    dispatch(signIn(email, password))
      .then((message) => {
        setIsLoading(false)
        console.log(message)
        props.history.push('/user')
        window.location.reload()
      })
      .catch((errorMessage) => {
        setIsLoading(false)
        setIsAlertOpen(true)
        setAlertMessage(errorMessage)
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
          Sign in
        </Typography>
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
            label='Email Address'
            name='email'
            autoComplete='email'
            autoFocus
            onChange={onChangeEmail}
          />
          <TextField
            variant='outlined'
            margin='normal'
            required
            fullWidth
            name='password'
            label='Password'
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
            onClick={handleSignIn}
          >
            Sign In
          </Button>
        </form>
      </div>
    </Container>
  )
}

export default Index
