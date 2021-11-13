import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import YouTubeIcon from '@material-ui/icons/YouTube'
import TwitterIcon from '@material-ui/icons/Twitter'
import InstagramIcon from '@material-ui/icons/Instagram'
import FacebookIcon from '@material-ui/icons/Facebook'

const useStyles = makeStyles({
  root: {
    maxWidth: 320,
    borderRadius: 20,
  },
  itemsName: {
    display: 'flex',
    width: 300,
    justifyContent: 'center',
    paddingLeft: 1,
  },
  item: {
    paddingLeft: 0,
    paddingRight: 15,
  },
})

const ListTitle = 'SNS'

const ListItems = [
  {icon: <YouTubeIcon />},
  {icon: <TwitterIcon />},
  {icon: <InstagramIcon />},
  {icon: <FacebookIcon />},
]

const UserProfileCard3 = () => {
  const classes = useStyles()

  return (
    <Card className={classes.root}>
      <CardContent>
        <Box pb={1}>
          <Typography children={ListTitle} />
        </Box>
        <Box className={classes.itemsName}>
          {ListItems.map((item, index) => (
            <Box className={classes.item}>
              {item.icon}
            </Box>
          ))}
        </Box>
      </CardContent>
    </Card>
  )
}

export default UserProfileCard3
