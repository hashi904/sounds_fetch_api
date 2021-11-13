import React, { useState } from 'react'
import Box from '@material-ui/core/Box'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import AccountCircle from '@material-ui/icons/AccountCircle'
import InputAdornment from '@material-ui/core/InputAdornment'


const InputNickname = (props) => {

  const [nickname, setNickname] = useState('')

  const onChangeNickname = (e) => {
    const nickname= e.target.value
    setNickname(nickname)
    props.setNickname(nickname)
  }

  return (
    <Box>
      <Box mt={1}>
        <Typography children='名前'/>
      </Box>
      <Box mt={1}>
        <TextField
          id='nickname'
          // label='名前'
          variant='outlined'
          onChange={onChangeNickname}
          size='small'
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
