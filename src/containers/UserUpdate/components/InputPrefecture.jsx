import React, { useState, useEffect } from 'react'
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
  const [prefecture, setPrefecture] = useState('都道府県を選ぶ')
  const [selectedValue, setSelectedValue] = useState('')

  const handleClickOpen = () => {
    setOpen(true)
  }
  const handleClose = () => {
    setOpen(false)
  }
  const onClickPrefecture = (prefecture) => {
    setSelectedValue(prefecture.label)
    props.setPrefecture(prefecture.id)
    handleClose()
  }

  useEffect(() => {
    if(props.updateUser){
      setPrefecture(props.updateUser.user.prefecture)
    } 
  }, [props.updateUser])

  return (
    <Box>
      <Box mt={1}>
        <Typography children='都道府県' />
      </Box>
      <Box display='flex' flexDirection='row' alignItems='center' mt={1}>
        <Button
          variant='outlined' 
          color={selectedValue === '' && prefecture === '' ? '' : 'secondary'}
          className={selectedValue === '' && prefecture === '' ? classes.buttonWidth : classes.bold}
          onClick={handleClickOpen}
          children={selectedValue === '' ? prefecture : selectedValue}
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
                ))}
              </Box>
            </FormControl>
          </DialogContent>
        </Dialog>
      </Box>
    </Box>
  )
}

export default InputPrefecture
