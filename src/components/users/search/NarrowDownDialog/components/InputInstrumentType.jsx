import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles'
import Box from '@material-ui/core/Box'
import Dialog from '@material-ui/core/Dialog'
import DialogContent from '@material-ui/core/DialogContent'
import DialogTitle from '@material-ui/core/DialogTitle'
import FormControl from '@material-ui/core/FormControl'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Chip from '@material-ui/core/Chip'

const useStyles = makeStyles((theme) => ({
  root: {
    margin: 1,
  },
  chip: {
    maxWidth: 100,
    margin: 3,
  },
  marginRight: {
    marginRight: 5,
  },
  buttonWidth: {
    minWidth: 300,
  },
  bold: {
    fontWeight: 600,
    minWidth: 300,
  },
}))

const InputInstrumentType = (props) => {
  const [open, setOpen] = useState(false)
  const [inputValue, setInputValue] = useState('')
  const instruments = useSelector((state) =>  state.users.searchSelector.instrument_types)
  const classes = useStyles()

  const handleClickOpen = () => {
    setOpen(true)
  }
  const handleClose = () => {
    setOpen(false)
  }
  const onClickInstrumentType = (instrument) => {
    setInputValue(instrument)
    props.setInstrumentType(instrument.id)
    handleClose()
  }

  return (
    <Box>
      <Box mt={1}>
        <Typography children='楽器' />
      </Box>
      <Box display='flex' flexDirection='row' alignItems='center' mt={1}>
        <Button
          variant='outlined' 
          onClick={handleClickOpen}
          color={inputValue === '' ? '' : 'secondary'}
          className={inputValue === '' ? classes.buttonWidth : classes.bold}
          children={inputValue === ''? '楽器を限定しない' : inputValue.name}
          mt={10}
        />
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle children='楽器の種類' />
          <DialogContent>
            <FormControl variant='outlined'>
              <Box>
                {instruments.map((instrument) => (
                  <Chip
                    clickable
                    className={classes.chip}
                    value={instrument.id}
                    label={instrument.name}
                    variant='outlined'
                    onClick={() => onClickInstrumentType(instrument)}
                  />
                ))}
              </Box>
            </FormControl>
          </DialogContent>
        </Dialog>
      </Box>
    </Box>
  )
}

export default InputInstrumentType
