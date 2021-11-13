import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Box from '@material-ui/core/Box'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import FormControl from '@material-ui/core/FormControl'

const useStyles = makeStyles((theme) => ({
  textField: {
    minWidth: 300,
  },
}))

const InputBirthday = (props) => {
  const classes = useStyles()
  const [inputError, setInputError] = useState(false)
  const [errorMessage, setErrorMessage] = useState(null)

  const onChangeBirthday = (e) => {
    const birthday = e.target.value.split('-',3).map( str => parseInt(str, 10) )
    props.setBirthday(birthday)

    switch(true) {
      case birthday.length === 0:
        setErrorMessage('誕生日を入力してください')
        setInputError(true)
        break
      case birthday[0] < 1900:
        setErrorMessage('年は1900年以上を入力してください')
        setInputError(true)
        break
      case birthday[0] > new Date().getFullYear():
        setErrorMessage('年は現在より先を入力しないでください')
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
        <Typography children='誕生日' />
      </Box>
      <Box mt={1}>
        <FormControl>
          <TextField
            id='誕生日'
            className={classes.textField}
            variant='outlined'
            size='small'
            color='secondary'
            type='date'
            helperText={errorMessage}
            error={inputError}
            onChange={onChangeBirthday}
            InputLabelProps={{
              shrink: true,
            }}
          />
        </FormControl>
      </Box>
    </Box>
  )
}

export default InputBirthday
