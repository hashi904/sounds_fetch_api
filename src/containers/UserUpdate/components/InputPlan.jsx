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

const InputPlan = (props) => {

  const [open, setOpen] = useState(false)

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const [planLabel, setPlanLabel] = useState('')

  const classes = useStyles()

  const onClickPlan = (plan) => {
    setPlanLabel(plan.label)
    props.setPlan(plan.id)
    handleClose()
  }

  const PlanType = [
      { id: 1, label: '一緒にプロを目指す仲間が欲しい' },
  ]

  return (
    <Box>
      <Box mt={1}>
        <Typography children='活動趣向' />
      </Box>
      <Box display='flex' flexDirection='row' alignItems='center' mt={1}>
        <Button
          variant='outlined' 
          color={planLabel === '' ? '' : 'secondary'}
          className={planLabel === '' ? classes.buttonWidth : classes.bold}
          onClick={handleClickOpen}
          children={planLabel === '' ? '活動趣向を選ぶ' : planLabel}
          mt={10}
        />
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle children='活動趣向' />
          <DialogContent>
            <FormControl variant='outlined'>
              <Box display='flex' justifyContent='center' alignItems='center' flexWrap='wrap'>
                {PlanType.map((plan) => (
                  <Button
                    clickable
                    className={classes.buttonDialog}
                    children={plan.label}
                    variant='outlined'
                    onClick={() => onClickPlan(plan)}
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

export default InputPlan
