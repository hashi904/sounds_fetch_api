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

const InputTweet = (props) => {
  const classes = useStyles()
  const [inputError, setInputError] = useState(false)
  const [errorMessage, setErrorMessage] = useState(null)

  const onChangeTweet = (e) => {
    const tweet= e.target.value
    props.setTweet(tweet)

    switch(true) {
      case tweet.length === 6:
        setErrorMessage('つぶやきは6文字以上で入力してください')
        setInputError(true)
        break
      case tweet.length > 20:
        setErrorMessage('つぶやきは20文字以下で入力してください')
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
        <Typography children='つぶやき'/>
      </Box>
      <Box mt={1}>
        <TextField
          id='introduction'
          variant='outlined'
          className={classes.textField}
          onChange={onChangeTweet}
          color='secondary'
          size='small'
          multiline
          rows={2}
        />
      </Box>
    </Box>
  )
}

export default InputTweet
