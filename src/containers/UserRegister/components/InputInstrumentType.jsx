import React, { useState, useEffect } from 'react'
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
  textField: {
    minWidth: 300,
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
  const classes = useStyles()
  const [open, setOpen] = useState(false)
  const [inputValue, setInputValue] = useState('')
  const [selectorValue, setSelectorValue] = useState()
  const [inputError, setInputError] = useState(false)
  const [errorMessage, setErrorMessage] = useState(null)

  useEffect(() => {
    if(props.selectorValue){
      setSelectorValue(props.selectorValue.instrument_type)
    }
  }, [props.selectorValue])

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const onClickInstrumentType = (v) => {
    setInputValue(v.name)
    props.setInstrumentType(v.id)

    switch(true) {
      case v.id.length === 0:
        setErrorMessage('楽器を選択してください')
        setInputError(true)
        break
      default:
        setErrorMessage(null)
        setInputError(false)
        break
    }

    handleClose()
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
        <Typography children='楽器' />
      </Box>
      <Box display='flex' flexDirection='row' alignItems='center' mt={1}>
        <Button
          variant='outlined' 
          color={inputValue === '' ? '' : 'secondary'}
          className={inputValue === '' ? classes.buttonWidth : classes.bold}
          onClick={handleClickOpen}
          children={inputValue === '' ? '楽器を選ぶ' : inputValue}
          mt={10}
        />
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle children='楽器の種類' />
          <DialogContent>
            <FormControl variant='outlined'>
              <Box>
                {selectorValue ? selectorValue.map((v) => (
                  <Chip
                    clickable
                    className={classes.chip}
                    value={v.id}
                    label={v.name}
                    variant='outlined'
                    onClick={() => onClickInstrumentType(v)}
                  />
                )) : ''}
              </Box>
            </FormControl>
          </DialogContent>
        </Dialog>
      </Box>
      { DisplayErrorMessage() }
    </Box>
  )
}

export default InputInstrumentType
