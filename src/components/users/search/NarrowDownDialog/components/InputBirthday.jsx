import React, { useState } from 'react'
import Box from '@material-ui/core/Box'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import FormControl from '@material-ui/core/FormControl'

const InputBirthday = (props) => {
  const [birthday, setBirthday] = useState('')

  const onChangeBirthday = (e) => {
    const birthday = e.target.value
    setBirthday(birthday)
    props.setBirthday(birthday)
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
            variant='outlined'
            size='small'
            // label='誕生日'
            type='date'
            defaultValue='2000-01-01'
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
