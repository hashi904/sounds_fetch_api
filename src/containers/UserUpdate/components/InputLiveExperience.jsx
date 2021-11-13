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

const InputLiveExperience = (props) => {
  const classes = useStyles()
  const [open, setOpen] = useState(false)
  const [selectedLiveExperience, setSelectedLiveExperience] = useState('ライブ出演回数')
  const [selectorValue, setSelectorValue] = useState()

  const handleClickOpen = () => {
    setOpen(true)
  }
  const handleClose = () => {
    setOpen(false)
  }
  const onClickLiveExperience = (liveExperience) => {
    setSelectedLiveExperience(liveExperience.type)
    props.setLiveExperience(liveExperience.id)
    handleClose()
  }

  // セレクターの値を挿入
  useEffect(() => {
    if(props.selectorValue){
      setSelectorValue(props.selectorValue.live_experience)
    }
  }, [props.selectorValue])
  // ユーザーの値を挿入
  useEffect(() => {
    if(!props.updateUser) { return }
    if(!selectorValue) { return }
    const updateUserLive_experience =
      props.updateUser.instruments[0].live_experience[0].live_experience_id
    const instrumentType = selectorValue.find((type) => type.id === updateUserLive_experience)
    setSelectedLiveExperience(instrumentType.type)
  }, [selectorValue])

  return (
    <Box>
      <Box mt={1}>
        <Typography children='ライブ経験' />
      </Box>
      <Box display='flex' flexDirection='row' alignItems='center' mt={1}>
        <Button
          variant='outlined' 
          color='secondary'
          className={classes.bold}
          onClick={handleClickOpen}
          children={selectedLiveExperience}
          mt={10}
        />
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle children='ライブ経験の種類' />
          <DialogContent>
            <FormControl variant='outlined'>
              <Box>
                {selectorValue? selectorValue.map((v) => (
                  <Chip
                    clickable
                    className={classes.chip}
                    value={v.id}
                    label={v.type}
                    variant='outlined'
                    onClick={() => onClickLiveExperience(v)}
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

export default InputLiveExperience
