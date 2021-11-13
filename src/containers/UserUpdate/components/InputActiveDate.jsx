import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Box from '@material-ui/core/Box'
import Dialog from '@material-ui/core/Dialog'
import DialogContent from '@material-ui/core/DialogContent'
import DialogTitle from '@material-ui/core/DialogTitle'
import FormControl from '@material-ui/core/FormControl'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'

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
    width: 300,
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

const InputActiveDate = (props) => {
  const classes = useStyles()
  const [selectedActiveDate, setSelectedActiveDate] = useState('活動日を選ぶ')
  const [open, setOpen] = useState(false)
  const [selectorValue, setSelectorValue] = useState()

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const onClickActiveDate = (v) => {
    setSelectedActiveDate(v.label)
    props.setActiveDate(v.id)
    handleClose()
  }

  // セレクターの値を挿入
  useEffect(() => {
    if(props.selectorValue){
      setSelectorValue(props.selectorValue.active_dates)
    }
  }, [props.selectorValue])

  // ユーザーの値を挿入
  useEffect(() => {
    if(!props.updateUser) { return }
    if(!selectorValue) { return }
    const updateUserActiveDateId = props.updateUser.active_dates[0].date
    const activeDate = selectorValue.find((type) => type.id === updateUserActiveDateId)
    setSelectedActiveDate(activeDate.label)
  }, [selectorValue])

  return (
    <Box>
      <Box mt={1}>
        <Typography children='活動日' />
      </Box>
      <Box display='flex' flexDirection='row' alignItems='center' mt={1}>
        <Button
          variant='outlined' 
          color='secondary'
          className={selectedActiveDate === '' && selectedActiveDate === '' ? classes.buttonWidth : classes.bold}
          onClick={handleClickOpen}
          children={selectedActiveDate}
          mt={10}
        />
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle children='活動日' />
          <DialogContent>
            <FormControl variant='outlined'>
              <Box display='flex' justifyContent='center' alignItems='center' flexWrap='wrap'>
                {selectorValue ? selectorValue.map((date) => (
                  <Button
                    clickable
                    className={classes.buttonDialog}
                    id={date.id}
                    value={date.label}
                    children={date.label}
                    variant='outlined'
                    onClick={() => onClickActiveDate(date)}
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

export default InputActiveDate
