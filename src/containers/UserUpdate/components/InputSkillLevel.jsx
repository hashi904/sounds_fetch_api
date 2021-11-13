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

const InputSkillLevel = (props) => {
  const classes = useStyles()
  const [open, setOpen] = useState(false)
  const [selectedSkillLevel, setSelectedSkillLevel] = useState('スキルを選ぶ')
  const [selectorValue, setSelectorValue] = useState()

  const handleClickOpen = () => {
    setOpen(true)
  }
  const handleClose = () => {
    setOpen(false)
  }
  const onClickSkillLevel = (skillLevel) => {
    setSelectedSkillLevel(skillLevel.value)
    props.setSkillLevel(skillLevel.id)
    handleClose()
  }

  // セレクターの値を挿入
  useEffect(() => {
    if(props.selectorValue){
      setSelectorValue(props.selectorValue.instrument_skill_level)
    }
  }, [props.selectorValue])
  // ユーザーの値を挿入
  useEffect(() => {
    if(!props.updateUser) { return }
    if(!selectorValue) { return }
    const updateUserSlillLevel = props.updateUser.instruments[0].skill_level
    const skillLevel = selectorValue.find((type) => type.id === updateUserSlillLevel)
    setSelectedSkillLevel(skillLevel.value)
  }, [selectorValue])

  return (
    <Box>
      <Box mt={1}>
        <Typography children='スキルレベル' />
      </Box>
      <Box display='flex' flexDirection='row' alignItems='center' mt={1}>
        <Button
          variant='outlined' 
          color='secondary'
          className={classes.bold}
          onClick={handleClickOpen}
          children={selectedSkillLevel}
          mt={10}
        />
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle children='スキルレベルの種類' />
          <DialogContent>
            <FormControl variant='outlined'>
              <Box>
                {selectorValue ? selectorValue.map((v) => (
                  <Chip
                    clickable
                    className={classes.chip}
                    value={v.id}
                    label={v.value}
                    variant='outlined'
                    onClick={() => onClickSkillLevel(v)}
                  />
                )): ''}
              </Box>
            </FormControl>
          </DialogContent>
        </Dialog>
      </Box>
    </Box>
  )
}

export default InputSkillLevel
