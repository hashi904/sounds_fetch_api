import React, { useEffect, useState }  from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import Chip from '@material-ui/core/Chip'

const useStyles = makeStyles({
  root: {
    maxWidth: 320,
    borderRadius: 20,
  },
  itemsName: {
    display: 'flex',
    width: 320,
    paddingLeft: 10,
  },
  item: {
    width: 140,
    marginTop: 5,
  },
})

const UserProfileInstrumentSkillCard = (props) => {
  const classes = useStyles()
  const [instrumentType, setInstrumentType] = useState('')
  const [experience, setExperience] = useState('')
  const [liveExperience, setLiveExperience] = useState('')

  useEffect(() => {
    if(props.user){
      setInstrumentType(props.user.instruments[0].name)
      setExperience(props.user.instruments[0].experience)
      setLiveExperience(props.user.instruments[0].live_experience)
    }
  }, [props.user])

  return (
    <Card className={classes.root}>
      <CardContent>
        <Box pb={1}>
          <Typography children='楽器スキル' />
        </Box>
        <Box 
          display='flex' 
          alignItems='center' 
          className={classes.itemsName}
        >
          <Box className={classes.item}>
            <Typography 
              variant='body2' 
              color='textSecondary' 
              pt 
              children='メイン楽器' 
            />
          </Box>
          <Box className={classes.item}>
            <Typography 
              variant='body2' 
              color='textPrimary' 
              children={
                <Chip 
                  label={instrumentType} 
                  variant='outlined' 
                  color='secondary' 
                  size='small' 
                />
              } 
            />
          </Box>
        </Box>
        <Box 
          display='flex' 
          alignItems='center' 
          className={classes.itemsName}
        >
          <Box className={classes.item}>
            <Typography 
              variant='body2' 
              color='textSecondary' 
              pt 
              children='演奏歴' 
            />
          </Box>
          <Box className={classes.item}>
            <Typography 
              variant='body2' 
              color='textPrimary' 
              children={experience} 
            />
          </Box>
        </Box>
        <Box 
          display='flex' 
          alignItems='center' 
          className={classes.itemsName}
        >
          <Box className={classes.item}>
            <Typography 
              variant='body2' 
              color='textSecondary' 
              pt 
              children='スキルレベル' 
            />
          </Box>
          <Box className={classes.item}>
            <Typography 
              variant='body2' 
              color='textPrimary' 
              children={liveExperience} 
            />
          </Box>
        </Box>
      </CardContent>
    </Card>
  )
}

export default UserProfileInstrumentSkillCard
