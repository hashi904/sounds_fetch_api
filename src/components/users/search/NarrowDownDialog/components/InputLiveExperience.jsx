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

const InputLiveExperience = (props) => {

  const [open, setOpen] = useState(false)

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const [liveExperienceLabel, setLiveExperienceLabel] = useState('')
  const [liveExperienceValue, setLiveExperienceValue] = useState('')


  const classes = useStyles()

  const onClickLiveExperienceType = (liveExperience) => {
    const liveExperienceId = liveExperience.id
    const liveExperienceLabel = liveExperience.label
    const liveExperienceValue = liveExperience.value
    setLiveExperienceValue(liveExperienceValue)
    setLiveExperienceLabel(liveExperienceLabel)
    props.setLiveExperience(liveExperience)
    handleClose()
  }

  const LiveExperienceType = [
      { id: 1, label: '1回', value: '1' },
      { id: 2, label: '2回', value: '2' },
      { id: 3, label: '3回', value: '3' },
      { id: 4, label: '4回', value: '4' },
      { id: 5, label: '5回', value: '5' },
      { id: 6, label: '6回', value: '6' },
  ]

  return (
    <Box>
      <Box mt={1}>
        <Typography children='ライブ経験' />
      </Box>
      <Box display='flex' flexDirection='row' alignItems='center' mt={1} >
        <Button
          variant='outlined' 
          onClick={handleClickOpen}
          children={liveExperienceLabel === '' ? 'ライブ経験を選ぶ' : liveExperienceLabel}
          mt={10}
        />
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle children='ライブ経験' />
          <DialogContent>
            <FormControl variant='outlined'>
              <Box display='flex' justifyContent='center' alignItems='center' flexWrap='wrap'>
                {LiveExperienceType.map((liveExperience) => (
                  <Button
                    clickable
                    className={classes.button}
                    value={liveExperience.value}
                    children={liveExperience.label}
                    variant='outlined'
                    onClick={() => onClickLiveExperienceType(liveExperience)}
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

export default InputLiveExperience
