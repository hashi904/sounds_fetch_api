import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Box from '@material-ui/core/Box'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles((theme) => ({
  textField: {
    minWidth: 300
  },
}))

const InputIntroduction = (props) => {
  const classes = useStyles()
  const [inputError, setInputError] = useState(false)
  const [errorMessage, setErrorMessage] = useState(null)

  const onChangeIntroduction = (e) => {
    const introduction= e.target.value
    props.setIntroduction(introduction)

    switch(true) {
      case introduction.length === 0:
        setErrorMessage('自己紹介を入力してください')
        setInputError(true)
        break
      case introduction.length > 800:
        setErrorMessage('自己紹介は800文字以下で入力してください')
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
        <Typography children='自己紹介'/>
      </Box>
      <Box mt={1}>
        <TextField
          id='introduction'
          variant='outlined'
          className={classes.textField}
          onChange={onChangeIntroduction}
          color='secondary'
          size='small'
          helperText={errorMessage}
          error={inputError}
          multiline
          rows={16}
        />
      </Box>
    </Box>
  )
}

export default InputIntroduction
