import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Chip from '@material-ui/core/Chip'
import TextField from '@material-ui/core/TextField'
import Autocomplete from '@material-ui/lab/Autocomplete'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles((theme) => ({
  textField: {
    minWidth: 300,
  },
}))

const InputGenre = (props) => {
  const initializeMusicGenre = props.updateUser.music_categories || []
  const musicGenreSelectorValue = props.selectorValue.music_categories || []
  const [inputValue, setInputValue] = useState(initializeMusicGenre)

  const classes = useStyles()

  useEffect(() => {
    setInputValue(initializeMusicGenre)
  }, [initializeMusicGenre])

  return (
    <Box>
      <Box mt={1}>
        <Typography children='好きなジャンル' />
      </Box>
      <Box mt={1}>
        <Autocomplete
          multiple
          className={classes.textField}
          value={inputValue}
          onChange={(event, newValue) => {
            setInputValue([
              ...newValue
            ])
            props.setGenre([
              ...newValue
            ])
            console.log(inputValue)
          }}

          options={musicGenreSelectorValue}
          getOptionSelected={(option, value) => option.id === value.id}
          getOptionLabel={(option) => option.name}
          renderTags={(tagValue, getTagProps) =>
            tagValue.map((option, index) => (
              <Chip
                color='secondary'
                variant='outlined'
                id={option.id}
                label={option.name}
                {...getTagProps({ index })}
              />
            ))
          }
          style={{ width: 300 }}
          renderInput={(params) => (
            <TextField
              {...params}
              variant='outlined'
              placeholder='好きなジャンルを選ぶ'
              color='secondary'
            />
          )}
        />
      </Box>
    </Box>
  )
}

export default InputGenre
