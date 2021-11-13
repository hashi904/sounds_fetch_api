import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'

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

const UserProfileIntroductionCard = (props) => {
  const classes = useStyles()
  const [introduction, setIntroduction] = useState('')
  
  useEffect(() => {
    if(props.user){
      setIntroduction(props.user.user.introduction)
    }
  }, [props.user])

  return (
    <Card className={classes.root}>
      <CardContent>
        <Box pb={1}>
          <Typography children='自己紹介文' />
        </Box>
        <Typography 
          variant='body2' 
          color='textSecondary'
          component='p' 
          children={introduction} 
        />
      </CardContent>
    </Card>
  )
}

export default UserProfileIntroductionCard
