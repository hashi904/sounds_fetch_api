import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { changePassword } from '../../actions/changePassword'
import redirectForUnAuthorization from '../../services/redirect/redirectForUnAuthorization'
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
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}))

const Index = (props) => {
  const classes = useStyles()
  const dispatch = useDispatch()
  const [currentPassword, setCurrentPassword] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [newPasswordConfirm, setNewPasswordConfirm] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [alertMessage, setAlertMessage] = useState('')
  const [isAlertOpen, setIsAlertOpen] = useState(false)
  const token = useSelector((state) => state.auth.user.token)
  const email = useSelector((state) => state.auth.user.user)

  const onChangeCurrentPassword = (e) => {
    const currentPassword = e.target.value
    setCurrentPassword(currentPassword)
  }

  const onChangeNewPassword = (e) => {
    const newPassword = e.target.value
    setNewPassword(newPassword)
  }

  const onChangeNewPasswordConfirm = (e) => {
    const newPasswordConfirm = e.target.value
    setNewPasswordConfirm(newPasswordConfirm)
  }

  const handleChangePassword = (e) => {
    setIsLoading(true)

    const changePasswordParams = {
      change_password: {
        email: email,
        password: currentPassword,
        change_password: newPassword,
        change_password_confirm: newPasswordConfirm
      }
    }

    e.preventDefault()

    dispatch(changePassword(token, changePasswordParams))
      .then((message) => {
        setIsLoading(false)
        console.log(message)
        props.history.push('/users')
        window.location.reload()
      })
      .catch((error) => {
        let errorMessage = 'リクエストが不正です'
        if(error.response.status === 401){
          redirectForUnAuthorization(props)
        }
        if (error.response.data) {
          errorMessage = error.response.data.message
        }

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
          パスワードの変更
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
            name='password'
            color='secondary'
            label='現在のパスワード'
            type='password'
            autoComplete='current-password'
            onChange={onChangeCurrentPassword}
          />
          <TextField
            variant='outlined'
            margin='normal'
            required
            fullWidth
            name='password'
            color='secondary'
            label='新しいパスワード'
            type='password'
            autoComplete='current-password'
            onChange={onChangeNewPassword}
          />
          <TextField
            variant='outlined'
            margin='normal'
            required
            fullWidth
            name='password'
            color='secondary'
            label='新しいパスワード（確認）'
            type='password'
            autoComplete='current-password'
            onChange={onChangeNewPasswordConfirm}
          />
          { Loading(isLoading) }
          <Button
            type='submit'
            fullWidth
            variant='contained'
            color='secondary'
            className={classes.submit}
            disabled={isLoading}
            onClick={handleChangePassword}
          >
            パスワードを変更する
          </Button>
        </form>
      </div>
    </Container>
  )
}

export default Index
