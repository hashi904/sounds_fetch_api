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

const InputIntroduction = (props) => {
  const classes = useStyles()

  const onChangeIntroduction = (e) => {
    const introduction= e.target.value
    props.setIntroduction(introduction)
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
          value={props.introduction}
          color='secondary'
          size='small'
          multiline
          rows={16}
        />
      </Box>
    </Box>
  )
}

export default InputIntroduction
