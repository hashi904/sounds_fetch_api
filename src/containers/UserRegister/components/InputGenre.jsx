import React, { useState } from 'react'
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
  const classes = useStyles()
  const [inputValue, setInputValue] = useState([])
  const [inputError, setInputError] = useState(false)
  const [errorMessage, setErrorMessage] = useState(null)
  const selectorValue = props.selectorValue.music_categories || []
  const validate = (v) => {
    switch(true) {
      case v.length === 0:
        setErrorMessage('好きなジャンルを1つ以上選択してください')
        setInputError(true)
        break
      default:
        setErrorMessage(null)
        setInputError(false)
        break
    }
  }

  const DisplayErrorMessage = () => {
    if(inputError){
      return (
        <Box mt={1} style={{color: '#f44336', textAlign: 'center', fontSize: '12px', marginTop: '4px', lineHeight: '14px'}}>
          { errorMessage }
        </Box>
      )
    }
  }

  return (
    <Box>
      <Box mt={1}>
        <Typography children='好きなジャンル' />
      </Box>
      <Box mt={1}>
        <Autocomplete
          multiple
          className={classes.textField}
          id='fixed-tags-demo'
          value={inputValue}
          onChange={(event, newValue) => {
            setInputValue([
              ...newValue
            ])
            props.setGenres(
              newValue.map((v) => v.id)
            )
            validate(newValue)

          }}
          options={selectorValue}
          getOptionLabel={(option) => option.name}
          renderTags={(tagValue, getTagProps) =>
            tagValue.map((option, index) => (
              <Chip
                color='secondary'
                variant='outlined'
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
      { DisplayErrorMessage() }
    </Box>
  )
}

export default InputGenre
