import React, { useState, useEffect } from 'react'

import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogContent from '@material-ui/core/DialogContent'
// import Divider from '@material-ui/core/Divider'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import CloseIcon from '@material-ui/icons/Close'
import Slide from '@material-ui/core/Slide'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'
import { Link } from 'react-router-dom'

// import InputNickname from './components/InputNickname'
// import InputBirthday from './components/InputBirthday'
// import InputPrefecture from './components/InputPrefecture'
import InputInstrumentType from './components/InputInstrumentType'
import InputFreeWord from './components/InputFreeWord'
// import InputExperience from './components/InputExperience'
// import InputLiveExperience from './components/InputLiveExperience'
// import InputAffectedMusicians from './components/InputAffectedMusicians'
// import InputPlan from './components/InputPlan'
// import InputCommitment from './components/InputCommitment'
// import InputActiveDate from './components/InputActiveDate'
// import InputGenre from './components/InputGenre'
// import InputSex from './components/InputSex'
// import { Paper } from '@material-ui/core'

import createCondition from '../../../../services/users/search/createCondition'

const useStyles = makeStyles((theme) => ({
  body:{
    backgroundColor: '#fafafa'
  },
  appBar: {
    position: 'relative',
    color: '#fff',
    backgroundColor: '#2F2D32',
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
  button: {
    fontWeight: 600,
    minWidth: 300,
  },
}))

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction='up' ref={ref} {...props} />
})

const Index = (props) => {
  const classes = useStyles()
  const [open, setOpen] = useState(false)
  // const [prefecture, setPrefecture] = useState('')
  // const [nickname, setNickname] = useState('')
  // const [birthday, setBirthday] = useState('')
  const [instrumentType, setInstrumentType] = useState('')
  const [freeWord, setFreeWord] = useState('')
  // const [experience, setExperience] = useState('')
  // const [liveExperience, setLiveExperience] = useState('')
  // const [affectedMusicians, setAffectedMusicians] = useState('')
  // const [plan, setPlan] = useState('')
  // const [genre, setGenre] = useState([])
  // const [commitment, setCommitment] = useState('')
  // const [activeDate, setActiveDate] = useState('')
  // const [sex, setSex] = useState('')
  const [queryString, setQueryString] = useState('')

  useEffect(() => {
    setQueryString(createCondition(freeWord, instrumentType))
  }, [instrumentType, freeWord])

  const handleClickOpen = () => {
    setInstrumentType('')
    setFreeWord('')
    props.setInstrumentType('')
    props.setFreeWord('')
    setOpen(true)
  }
  const handleCloseSave = (
    // sex,
    // prefecture,
    instrumentType,
    freeWord,
    // experience,
    // liveExperience,
    // plan,
    // commitment,
    // activeDate,
    // genre,
    // affectedMusicians,
  ) => {
    // props.setSex(sex)
    // props.setPrefecture(prefecture)
    props.setInstrumentType(instrumentType)
    props.setFreeWord(freeWord)
    // props.setExperience(experience)
    // props.setLiveExperience(liveExperience)
    // props.setPlan(plan)
    // props.setCommitment(commitment)
    // props.setActiveDate(activeDate)
    // props.setGenre(genre)
    // props.setAffectedMusicians(affectedMusicians)
    props.setCondition(createCondition(freeWord, instrumentType, 1))

    setOpen(false)
  }

  const handleCloseCancel = () => {
    setOpen(false)
  }

  return (
    <Box>
      <Button
        variant='outlined'
        style={{backgroundColor: '#fff2f5'}}
        color='secondary' onClick={handleClickOpen}
        children={<Typography className={classes.bold}
        children='絞り込む' />}
      />
      <Dialog
        fullScreen open={open}
        onClose={handleCloseCancel} 
        TransitionComponent={Transition}
      >
        {/* 検索画面のHeaderに相当する */}
        <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton
              edge='start'
              color='inherit'
              onClick={handleCloseCancel}
              aria-label='close'
            >
              <CloseIcon />
            </IconButton>
            <Typography
              variant='h6'
              children='ミュージシャンを絞り込む'
              className={classes.title}
            />
          </Toolbar>
        </AppBar>
        <DialogContent className={classes.body}>
          <Container>
            <Grid container justify='center' alignItems='center'>
              <Grid item>
                <Box display='flex' alignItems='center' justifyContent='center' mt={15}>
                  <Typography children='絞り込み条件を入力する' variant='h5' />
                </Box>
                <Box display='flex' flexDirection='column' alignItems='flex-start' mt={2}>
                  <Box>
                    <InputInstrumentType 
                      setInstrumentType = {setInstrumentType}
                    />
                  </Box>
                  <Box>
                    <InputFreeWord
                      setFreeWord = {setFreeWord}
                    />
                  </Box>
                  {/* <Box display='flex' flexDirection='row' alignItems='center'>
                    <Box mr={3}><InputNickname setNickname = {setNickname} /></Box>
                    <InputBirthday setBirthday = {setBirthday} />
                  </Box> */}
                  {/* <Box display='flex' flexDirection='row' alignItems='center'>
                    <Box mr={3}><InputSex setSex = {setSex} /></Box>
                    <Box mr={3}><InputPrefecture setPrefecture = {setPrefecture} /></Box>
                  </Box> */}
                  {/* <Box display='flex' flexDirection='column' alignItems='center' justifyContent='flex-start'> */}
                    {/* <Box mr={3}><InputExperience setExperience = {setExperience} /></Box>
                    <Box mr={3}><InputLiveExperience setLiveExperience = {setLiveExperience} /></Box> */}
                  {/* </Box> */}
                  {/* <InputProfileImage /> */}
                  {/* <Box display='flex' flexDirection='row' alignItems='center'>
                    <Box mr={3}><InputPlan setPlan = {setPlan} /></Box>
                    <Box mr={3}><InputCommitment setCommitment = {setCommitment} /></Box>
                    <Box mr={3}><InputActiveDate setActiveDate = {setActiveDate} /></Box>
                  </Box>
                  <InputGenre setGenre = {setGenre} />
                  <InputAffectedMusicians setAffectedMusicians = {setAffectedMusicians} />  */}
                </Box>
                <Box display='flex' flexDirection='column' alignItems='center' mt={4}>
                  <Button
                    component={Link}
                    to={`/users${queryString}`}
                    children='検索する' 
                    color='secondary'
                    variant='contained'
                    onClick={() => handleCloseSave(
                      // sex,
                      // prefecture,
                      instrumentType,
                      freeWord,
                      // experience,
                      // liveExperience,
                      // plan,
                      // commitment,
                      // activeDate,
                      // genre,
                      // affectedMusicians
                    )}
                    className={classes.button} 
                  />
                </Box>
              </Grid>
            </Grid>
          </Container>
        </DialogContent>
      </Dialog>
    </Box>
  )
}

export default Index
