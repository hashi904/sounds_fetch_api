import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Box from '@material-ui/core/Box'
import Dialog from '@material-ui/core/Dialog'
import DialogContent from '@material-ui/core/DialogContent'
import DialogTitle from '@material-ui/core/DialogTitle'
import FormControl from '@material-ui/core/FormControl'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import prefectures from './../../../lib/prefecture'

const useStyles = makeStyles((theme) => ({
  root: {
    margin: 1,
  },
  chip: {
    maxWidth: 100,
    margin: 3,
  },
  buttonMain: {
    width: 242,
  },
  buttonDialog: {
    width: 100,
    margin: 5,
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

const InputPrefecture = (props) => {
  const classes = useStyles()
  const [open, setOpen] = useState(false)
  const [inputValue, setInputValue] = useState('')
  const [inputError, setInputError] = useState(false)
  const [errorMessage, setErrorMessage] = useState(null)

  const handleClickOpen = () => {
    setOpen(true)
  }
  const handleClose = () => {
    setOpen(false)
  }
  const onClickPrefecture = (prefecture) => {
    setInputValue(prefecture.label)
    props.setPrefecture(prefecture.id)

    switch(true) {
      case prefecture.id.length === 0:
        setErrorMessage('都道府県を選択してください')
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
        <Typography children='都道府県' />
      </Box>
      <Box display='flex' flexDirection='row' alignItems='center' mt={1}>
        <Button
          variant='outlined' 
          color={inputValue === '' ? '' : 'secondary'}
          className={inputValue === '' ? classes.buttonWidth : classes.bold}
          onClick={handleClickOpen}
          children={inputValue === '' ? '都道府県を選ぶ' : inputValue}
          mt={10}
        />
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle children='都道府県' />
          <DialogContent>
            <FormControl variant='outlined'>
              <Box display='flex' flexDirection='column' justifyContent='center' alignItems='center' flexWrap='wrap'>
                {prefectures.map((prefecture) => (
                  <Button
                    clickable
                    className={classes.buttonDialog}
                    children={prefecture.label}
                    variant='outlined'
                    onClick={() => onClickPrefecture(prefecture)}
                  />
                ))
                }
              </Box>
            </FormControl>
          </DialogContent>
        </Dialog>
      </Box>
      { DisplayErrorMessage() }
    </Box>
  )
}

export default InputPrefecture
