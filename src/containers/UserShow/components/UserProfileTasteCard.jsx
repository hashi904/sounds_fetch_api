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

const UserProfileTasteCard = (props) => {
  const classes = useStyles()
  const [genres, setGenres] = useState('')

  useEffect(() => {
    if(props.user){
      setGenres(props.user.music_categories)
    }
  }, [props.user])

  return (
    <Card className={classes.root}>
      <CardContent>
        <Box pb={1}>
          <Typography children='音楽趣向' />
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
              children='好きなジャンル' 
            />
          </Box>
          <Box className={classes.item}>
            {genres
              ? genres.map((item, index) => (
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
      </CardContent>
    </Card>
  )
}

export default UserProfileTasteCard
