import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import Chip from '@material-ui/core/Chip'

const useStyles = makeStyles({
  root: {
    width: 270,
    minWidth: 270,
    borderRadius: 20,
    backgroundColor: '#fff'
  },
  media: {
    width: 270,
    height: 270,
    borderRadius: 20,
  },
  chip: {
    display: 'flex',
    justifyContent: 'center',
    margin: 5,
  },
  itemMain: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 5,
  },
  itemName: {
    component: 'div',
    justifyContent: 'center',
    alignItems: 'center',
    maxWidth: 250,
    height: 30,
    overflow: 'hidden',
    whiteSpace: 'none',
    textOverflow:'ellipsis',
  },
  itemTweet: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
  },
  itemSub: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 83,
  },
  itemBottom: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 250,
  },
})

const UserCard = ({ user }) => {
  const classes = useStyles()

  return (
    <Card className={classes.root}>
      <CardActionArea href={'/user/detail/'+user.id}>
        <CardMedia
          className={classes.media}
          image={user.user_profile_images[0]}
        />
        <CardContent>
          <Box className={classes.itemMain}>
            <Box className={classes.itemName} >
              <Typography
                gutterBottom
                variant='h5' 
                component='h2'
                children={user.nickname}
              />
            </Box>
          </Box>
          <Box display='flex' justifyContent='center' mt={1} >
            <Box className={classes.itemSub}>
              <Typography children={user.sex} />
            </Box>
            <Box className={classes.itemSub}>
              <Typography children={user.prefecture} />
            </Box>
          </Box>
          <Box>
            <Typography
              variant='body2'
              color='textSecondary'
              className={classes.itemTweet}
              children={user.tweet}  
            />
          </Box>
          <Box display='flex'>
            <Box className={classes.itemBottom}>
              {user.music_categories.map((music_category) => <Chip label={music_category} variant='outlined' size='small' color='secondary' className={classes.chip} /> )}
              {user.instruments.instrument_types.map((instrument_type) => <Chip label={instrument_type} variant='outlined' size='small' color='primary' className={classes.chip} />  )}
            </Box>
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

export default UserCard
