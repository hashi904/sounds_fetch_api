import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Box from '@material-ui/core/Box'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import AccountCircle from '@material-ui/icons/AccountCircle'
import InputAdornment from '@material-ui/core/InputAdornment'

const useStyles = makeStyles((theme) => ({
  textField: {
    minWidth: 300
  },
}))

const InputNickname = (props) => {
  const classes = useStyles()
  const [inputError, setInputError] = useState(false)
  const [errorMessage, setErrorMessage] = useState(null)

  const onChangeNickname = (e) => {
    const nickname= e.target.value
    props.setNickname(nickname)

    switch(true) {
      case nickname.length === 0:
        setErrorMessage('ニックネームを入力してください')
        setInputError(true)
        break
      case nickname.length > 10:
        setErrorMessage('ニックネームは9文字以下で入力してください')
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
        <Typography children='名前'/>
      </Box>
      <Box mt={1}>
        <TextField
          id='nickname'
          className={classes.textField}
          variant='outlined'
          onChange={onChangeNickname}
          color='secondary'
          size='small'
          helperText={errorMessage}
          error={inputError}
          InputProps={{
            startAdornment: 
              <InputAdornment position='start'>
                <AccountCircle htmlColor='gray' />
              </InputAdornment>,
          }}
        />
      </Box>
    </Box>
  )
}

export default InputNickname
