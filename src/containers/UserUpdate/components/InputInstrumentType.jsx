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
  const [selectedInstrumentType, setSelectedInstrumentType] = useState('楽器を選ぶ')
  const [selectorValue, setSelectorValue] = useState()

  const handleClickOpen = () => {
    setOpen(true)
  }
  const handleClose = () => {
    setOpen(false)
  }
  const onClickInstrumentType = (instrumentType) => {
    setSelectedInstrumentType(instrumentType.name)
    props.setInstrumentType(instrumentType.id)
    handleClose()
  }

  // セレクターの値を挿入
  useEffect(() => {
    if(props.selectorValue){
      setSelectorValue(props.selectorValue.instrument_type)
    }
  }, [props.selectorValue])
  // ユーザーの値を挿入
  useEffect(() => {
    if(!props.updateUser) { return }
    if(!selectorValue) { return }
    const updateUserInstrumentTypeId = props.updateUser.instruments[0].instrument_type_id
    const instrumentType = selectorValue.find((type) => type.id === updateUserInstrumentTypeId)
    setSelectedInstrumentType(instrumentType.name)
  }, [selectorValue])

  return (
    <Box>
      <Box mt={1}>
        <Typography children='楽器' />
      </Box>
      <Box display='flex' flexDirection='row' alignItems='center' mt={1}>
        <Button
          variant='outlined' 
          color='secondary'
          className={classes.bold}
          onClick={handleClickOpen}
          children={selectedInstrumentType}
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
    </Box>
  )
}

export default InputInstrumentType
