import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Button from '@material-ui/core/Button'
import Box from '@material-ui/core/Box'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import Hidden from '@material-ui/core/Hidden'
import LeftDrawer from '../LeftDrawer/Index'
import Grid from '@material-ui/core/Grid'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
    backgroundColor: '#2F2D32',
  },
  title: {
    display: 'block',
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  button: {
    marginRight: 10,
    marginLeft: 5,
  },
}))

const Header = (props) => {
  const classes = useStyles()
  const [open, setOpen] = useState(false)

  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn)
  
  const toggleDrawer = () => {
    setOpen(!open)
  }

  return (
    <div className={classes.root}>
      <AppBar className={classes.appBar} position='fixed' color='inherit' elevation={0} >
        <Toolbar>
          <Hidden lgUp>
            <IconButton
              children={<MenuIcon />} 
              edge='start' className={classes.menuButton} 
              color='inherit' 
              aria-label='menu' 
              onClick={toggleDrawer}
            />
          </Hidden>
          <Typography
            className={classes.title}
            variant='h6' 
            noWrap 
            children='SoundsFetch' 
          />
          {isLoggedIn
          ? ''
          : <Box>
              <Button
                variant='contained'
                color='secondary'
                children='会員登録'
                href='/auth_mail'
                className={classes.button}
              />
              <Button
                variant='contained'
                color='secondary'
                children='ログイン'
                href='/sign_in'
              />
            </Box>
          }
        </Toolbar>
      </AppBar>

      {/* LeftDrawer */}
      {open === false ? '' : <LeftDrawer props={props} />}
      <Hidden mdDown>
          <Grid item xs={2} smDown>
            <LeftDrawer props={props} />
          </Grid>
      </Hidden>
    </div>
  )
}

export default Header
