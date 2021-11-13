import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Box from '@material-ui/core/Box'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles((theme) => ({
  chip: {
    marginLeft: 5,
    marginRight: 5,
    marginTop: 5,
    color: '#fff',
    fontWeight: 600,
    backgroundColor: '#2f2d32',
  },
  bold: {
    fontWeight: 600,
  },
  textField: {
    minWidth: 300,
  }
}))

const InputFreeWord = (props) => {
  const classes = useStyles()
  const [freeWord, setFreeWord] = useState('')

  const onChangeFreeWord = (e) => {
    const freeWord= e.target.value
    setFreeWord(freeWord)
    props.setFreeWord(freeWord)
  }

  return (
    <Box>
      <Box mt={1}>
        <Typography children='キーワード'/>
      </Box>
      <Box mt={1}>
        <TextField
          id='freeWord'
          className={classes.textField}
          variant='outlined'
          onChange={onChangeFreeWord}
          size='small'
          // InputProps={{
          //   startAdornment: 
          //     <InputAdornment position='start'>
          //       <AccountCircle htmlColor='gray' />
          //     </InputAdornment>,
          // }}
          // 
        />
      </Box>
    </Box>
  )
}

export default InputFreeWord
