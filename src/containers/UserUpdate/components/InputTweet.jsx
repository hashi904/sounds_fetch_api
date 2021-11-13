import React from 'react'
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

  const onChangeTweet = (e) => {
    const value= e.target.value
    props.setTweet(value)
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
          value={props.tweet}
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
