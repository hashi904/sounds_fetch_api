import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'

const useStyles = makeStyles({
  root: {
    width: 320,
    minWidth: 320,
    borderRadius: 20,
  },
  media: {
    width: 320,
    height: 320,
    borderRadius: 20,
  },
})

const UserProfileImageCard = (props) => {
  const classes = useStyles()
  const [profileImage, setProfileImage] = useState('')
  const [nickname, setNickname] = useState('')
  const [sex, setSex] = useState('')
  const [birthYear, setBirthYear] = useState('')
  const [tweet, setTweet] = useState('')

  useEffect(() => {
    if(props.user){
      setProfileImage(props.user.profile_images)
      setNickname(props.user.user.nickname)
      setSex(props.user.user.sex)
      setBirthYear(props.user.user.birth_year)
      setTweet(props.user.user.tweet)
    }
  }, [props.user])

  const today = new Date()
  const age = today.getFullYear() - birthYear;

  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        image={profileImage[0]}
      />
      <CardContent>
        <Box
          display='flex'
          flexDirection='row'
          alignItems='center' 
          justifyContent='space-between'
        >
          <Box ml={0}>
            <Typography 
              children={nickname}
              gutterBottom 
              variant='h5' 
              component='h2' 
            />
          </Box>
          <Box 
            display='flex' 
            flexDirection='row'
          >
            <Box mr={3}>
              <Typography
                children={sex}
              />
            </Box>
            <Box mr={3}>
              <Typography
                children={age}
              />
            </Box>
          </Box>
        </Box>
        <Typography 
          variant='body2' 
          color='textSecondary' 
          component='p' 
          children={tweet}
        />
      </CardContent>
    </Card>
  )
}

export default UserProfileImageCard
