import React, { useState } from 'react'
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
  button: {
    width: 200,
    margin: 5,
  },
  marginRight: {
    marginRight: 5,
  },
}))

const InputSex = (props) => {

  const [open, setOpen] = useState(false)

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const [sexLabel, setSexLabel] = useState('')
  const [sexValue, setSexValue] = useState('')


  const classes = useStyles()

  const onClickSex = (sex) => {
    const sexId = sex.id
    const sexLabel = sex.label
    const sexValue = sex.value
    setSexValue(sexValue)
    setSexLabel(sexLabel)
    props.setSex(sexLabel)
    handleClose()
  }

  const SexType = [
      { id: 1, label: '男性', value: '1' },
      { id: 2, label: '女性', value: '2' },
      { id: 3, label: 'その他', value: '3' },
  ]

  return (
    <Box>
      <Box mt={1}>
        <Typography children='性別' />
      </Box>
      <Box display='flex' flexDirection='row' alignItems='center' mt={1}>
        <Button
          variant='outlined' 
          onClick={handleClickOpen}
          children={sexLabel === '' ? '性別を選ぶ' : sexLabel}
          mt={10}
        />
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle children='性別' />
          <DialogContent>
            <FormControl variant='outlined'>
              <Box display='flex' justifyContent='center' alignItems='center' flexWrap='wrap'>
                {SexType.map((sex) => (
                  <Button
                    clickable
                    className={classes.button}
                    value={sex.value}
                    children={sex.label}
                    variant='outlined'
                    onClick={() => onClickSex(sex)}
                  />
                ))
                }
              </Box>
            </FormControl>
          </DialogContent>
        </Dialog>
      </Box>
    </Box>
  )
}

export default InputSex
