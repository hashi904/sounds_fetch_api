import React, { useEffect, useState }  from 'react'
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

const UserProfileActivityCard = (props) => {
  const classes = useStyles()
  const [activeDates, setActiveDates] = useState('')
  const [prefecture, setPrefecture] = useState('')

  useEffect(() => {
    if(props.user){
      setActiveDates(props.user.active_dates)
      setPrefecture(props.user.user.prefecture)
    }
  }, [props.user])

  return (
    <Card className={classes.root}>
      <CardContent>
        <Box pb={1}>
          <Typography children='音楽活動' />
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
              children='活動日' />
          </Box>
          <Box className={classes.item}>
            {activeDates
              ? activeDates.map((item) => (
                  <Typography 
                    variant='body2' 
                    color='textPrimary' 
                    children={item} 
                  />
                ))
              : ''
            }
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
              children='都道府県' 
            />
          </Box>
          <Box className={classes.item}>
            <Typography 
              variant='body2' 
              color='textPrimary' 
              children={prefecture} 
            />
          </Box>
        </Box>
      </CardContent>
    </Card>
  )
}

export default UserProfileActivityCard
