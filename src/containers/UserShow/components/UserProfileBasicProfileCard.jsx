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

const UserProfileBasicProfileCard = (props) => {
  const classes = useStyles()
  const [nickname, setNickname] = useState('')
  const [sex, setSex] = useState('')
  const [birthYear, setBirthYear] = useState('')
  const today = new Date()
  const age = today.getFullYear() - birthYear

  useEffect(() => {
    if(props.user){
      setNickname(props.user.user.nickname)
      setSex(props.user.user.sex)
      setBirthYear(props.user.user.birth_year)
    }
  }, [props.user])

  return (
    <Card className={classes.root}>
      <CardContent>
        <Box pb={1}>
          <Typography children='基本プロフィール' />
        </Box>
        <Box className={classes.itemsName}>
          <Box className={classes.item}>
            <Typography
              variant='body2'
              color='textSecondary'
              pt
              children='ニックネーム'
            />
          </Box>
          <Box className={classes.item}>
            <Typography
              variant='body2'
              color='textPrimary'
              children={nickname}
            />
          </Box>
        </Box>
        <Box className={classes.itemsName}>
          <Box className={classes.item}>
            <Typography
              variant='body2'
              color='textSecondary'
              pt
              children='年齢'
            />
          </Box>
          <Box className={classes.item}>
            <Typography
              variant='body2'
              color='textPrimary'
              children={age}
            />
          </Box>
        </Box>
        <Box className={classes.itemsName}>
          <Box className={classes.item}>
            <Typography
              variant='body2'
              color='textSecondary'
              pt
              children='性別'
            />
          </Box>
          <Box className={classes.item}>
            <Typography
              variant='body2'
              color='textPrimary'
              children={sex}
            />
          </Box>
        </Box>
      </CardContent>
    </Card>
  )
}

export default UserProfileBasicProfileCard
