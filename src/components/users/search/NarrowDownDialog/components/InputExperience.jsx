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

const InputExperience = (props) => {

  const [open, setOpen] = useState(false)

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const [experienceLabel, setExperienceLabel] = useState('')
  const [experienceValue, setExperienceValue] = useState('')


  const classes = useStyles()

  const onClickExperienceType = (experience) => {
    const experienceId = experience.id
    const experienceLabel = experience.label
    const experienceValue = experience.value
    setExperienceValue(experienceValue)
    setExperienceLabel(experienceLabel)
    props.setExperience(experience)
    handleClose()
  }

  const ExperienceType = [
      { id: 1, label: '1年', value: '1' },
      { id: 2, label: '2年', value: '2' },
      { id: 3, label: '3年', value: '3' },
      { id: 4, label: '4年', value: '4' },
      { id: 5, label: '5年', value: '5' },
      { id: 6, label: '6年', value: '6' },
  ]

  return (
    <Box>
      <Box mt={1}>
        <Typography children='演奏歴' />
      </Box>
      <Box display='flex' flexDirection='row' alignItems='center' mt={1}>
        <Button
          variant='outlined' 
          onClick={handleClickOpen}
          children={experienceLabel === '' ? '演奏歴を選ぶ' : experienceLabel}
          mt={10}
        />
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle children='演奏歴' />
          <DialogContent>
            <FormControl variant='outlined'>
              <Box display='flex' justifyContent='center' alignItems='center' flexWrap='wrap'>
                {ExperienceType.map((experience) => (
                  <Button
                    clickable
                    className={classes.button}
                    value={experience.value}
                    children={experience.label}
                    variant='outlined'
                    onClick={() => onClickExperienceType(experience)}
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

export default InputExperience
