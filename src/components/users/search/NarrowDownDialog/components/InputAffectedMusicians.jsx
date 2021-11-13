/* eslint-disable no-use-before-define */
import React from 'react'
import Chip from '@material-ui/core/Chip'
import TextField from '@material-ui/core/TextField'
import Autocomplete from '@material-ui/lab/Autocomplete'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import { getPanelId } from '@material-ui/lab'

const InputAffectedMusicians = (props) => {

  return (
    <Box>
      <Box mt={1}>
        <Typography children='影響を受けたミュージシャン' />
      </Box>
      <Box mt={1}>
        <Autocomplete
          multiple
          options={musicians}
          getOptionLabel={(option) => option.label}
          // defaultValue={genres[0].label}
          filterSelectedOptions
          style={{ width: 500 }}
          // placeholder=''
          renderInput={(params) => (
            <TextField
              {...params}
              variant='outlined'
              // label='filterSelectedOptions'
            />
          )}
          onChange={(event, newValue) => {
            props.setAffectedMusicians(newValue)
          }}
          renderTags={(tagValue, getTagProps) =>
            tagValue.map((option, index) => (
              <Chip
                color='secondary'
                variant='outlined'
                label={option.label}
                {...getTagProps({ index })}
              />
            ))
          }
        />
      </Box>
    </Box>
  )
}

const musicians = [
  { id: 1, label: 'The Shawshank Redemption', year: 1994 },
  { id: 2, label: 'The Godfather', year: 1972 },
  { id: 3, label: 'The Godfather: Part II', year: 1974 },
  { id: 4, label: 'The Dark Knight', year: 2008 },
  { id: 5, label: '12 Angry Men', year: 1957 },
  { id: 6, label: 'Schindlers List', year: 1993 },
  { id: 7, label: 'Pulp Fiction', year: 1994 },
  { id: 8, label: 'The Lord of the Rings: The Return of the King', year: 2003 },
  { id: 9, label: 'The Good, the Bad and the Ugly', year: 1966 },
  { id: 10, label: 'Fight Club', year: 1999 },
]

export default InputAffectedMusicians