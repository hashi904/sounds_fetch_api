import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Box from '@material-ui/core/Box'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import InputAdornment from '@material-ui/core/InputAdornment'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'

const useStyles = makeStyles((theme) => ({
  textField: {
    minWidth: 300,
  },
}))

const InputPassword = (props) => {
  const classes = useStyles()
  const [inputError, setInputError] = useState(false)
  const [errorMessage, setErrorMessage] = useState(null)

  const onChangePassword = (e) => {
    const password= e.target.value
    props.setPassword(password)

    switch(true) {
      case password.length === 0:
        setErrorMessage('パスワードを入力してください')
        setInputError(true)
        break
      case password.length > 72:
        setErrorMessage('パスワードは72文字以下で入力してください')
        setInputError(true)
        break
      default:
        setErrorMessage(null)
        setInputError(false)
        break
    }
  }

  return (
    <Box>
      <Box mt={1}>
        <Typography children='パスワード'/>
      </Box>
      <Box mt={1}>
        <TextField
          id='password'
          className={classes.textField}
          variant='outlined'
          type='password'
          color='secondary'
          onChange={onChangePassword}
          size='small'
          helperText={errorMessage}
          error={inputError}
          InputProps={{
            startAdornment: 
              <InputAdornment position='start'>
                <LockOutlinedIcon htmlColor='gray' />
              </InputAdornment>,
          }}
        />
      </Box>
    </Box>
  )
}

export default InputPassword
