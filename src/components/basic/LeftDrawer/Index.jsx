import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles'
import Drawer from '@material-ui/core/Drawer'
import Toolbar from '@material-ui/core/Toolbar'
import List from '@material-ui/core/List'
import Divider from '@material-ui/core/Divider'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import SearchIcon from '@material-ui/icons/Search'
import { Typography } from '@material-ui/core'
import Collapse from '@material-ui/core/Collapse'
import ExpandLess from '@material-ui/icons/ExpandLess'
import ExpandMore from '@material-ui/icons/ExpandMore'
import AccountCircle from '@material-ui/icons/AccountCircle'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz'
import { signOut } from '../../../actions/auth'

const drawerWidth = 240

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: '#fff2f5',
  },
  drawerContainer: {
    overflow: 'auto',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  bold: {
    fontWeight: 600,
  },
  sub: {
    fontWeight: 600,
    paddingLeft: 55,
  },
}))

const LeftDrawer = (props) => {
  const classes = useStyles()
  const dispatch = useDispatch()
  const [openSearch, setOpenSearch] = useState(false)
  const [openUser, setOpenUser] = useState(false)
  const [openOther, setOpenOther] = useState(false)

  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn)

  const user = useSelector((state) => state.auth.user)
  const currentUserId = isLoggedIn ? user.user_id : ''

  const SearchContents = [
    {text: 'ミュージシャン', href: '/users'},
  ]

  const UserProfileMenu = [
    {text: '確認する', href: `/user/detail/${currentUserId}`},
    {text: '編集する', href: '/user/update'},
  ]

  const LoggedInUserMenu = [
    {text: 'ログアウトする', href: ''},
    {text: 'メールアドレス変更', href: '/change_mail'},
    {text: 'パスワード変更', href: '/change_password'},
    {text: 'お問い合わせ', href: '/contact'},
  ]

  const NotLoggedInUserMenu = [
    {text: '会員登録', href: '/auth_mail'},
    {text: 'ログイン', href: '/sign_in'},
  ]

  const handleClickSearch = () => {
    setOpenSearch(!openSearch)
  }

  const handleClickUser = () => {
    setOpenUser(!openUser)
  }

  const handleClickOther = () => {
    setOpenOther(!openOther)
  }

  const ListItemLink = (items) => {
    return <ListItem button component='a' {...items} />
  }

  const handleSignOut = (e) => {
    // 親要素クリックによるイベントバブリング防止
    e.stopPropagation()

    if(e.target.textContent !== 'ログアウトする') { return }
    dispatch(signOut(props.props))
  }

    return (
      <Drawer
        className={classes.drawer}
        variant='permanent'
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <Toolbar />
        <div className={classes.drawerContainer}>
          <ListItem button onClick={handleClickSearch}>
            <ListItemIcon>
              <SearchIcon />
            </ListItemIcon>
            <ListItemText primary={<Typography children='さがす' className={classes.bold} />} />
            {openSearch ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={openSearch} timeout='auto' unmountOnExit>
            <List component='div' disablePadding>
              {SearchContents.map((item) => (
                  <ListItemLink button key={item.text} href={item.href}>
                    <ListItemText
                      primary={<Typography children={item.text} className={classes.sub} />}
                    />
                  </ListItemLink>
              ))}
            </List>
          </Collapse>
          {isLoggedIn
          ? <div>
              <ListItem button onClick={handleClickUser}>
                <ListItemIcon>
                  <AccountCircle />
                </ListItemIcon>
                <ListItemText primary={<Typography children='プロフィール' className={classes.bold} />} />
                {openUser ? <ExpandLess /> : <ExpandMore />}
              </ListItem>
              <Collapse in={openUser} timeout='auto' unmountOnExit>
                <List component='div' disablePadding>
                  {UserProfileMenu.map((item) => (
                      <ListItemLink button key={item.text} href={item.href}>
                        <ListItemText
                          primary={<Typography children={item.text} className={classes.sub} />}
                        />
                      </ListItemLink>
                  ))}
                </List>
              </Collapse>

              <ListItem button onClick={handleClickOther}>
                <ListItemIcon>
                  <MoreHorizIcon />
                </ListItemIcon>
                <ListItemText primary={<Typography children='その他' className={classes.bold} />} />
                {openOther ? <ExpandLess /> : <ExpandMore />}
              </ListItem>
              <Collapse in={openOther} timeout='auto' unmountOnExit>
                <List component='div' disablePadding>
                  {LoggedInUserMenu.map((item) => (
                      <ListItemLink button key={item.text} href={item.href} onClick = {handleSignOut} >
                        <ListItemText
                          primary={<Typography children={item.text} className={classes.sub} />}
                        />
                      </ListItemLink>
                  ))}
                </List>
              </Collapse>
            </div>
          : <div>
              <ListItem button onClick={handleClickOther}>
                <ListItemIcon>
                  <MoreHorizIcon />
                </ListItemIcon>
                <ListItemText primary={<Typography children='その他' className={classes.bold} />} />
                {openOther ? <ExpandLess /> : <ExpandMore />}
              </ListItem>
              <Collapse in={openOther} timeout='auto' unmountOnExit>
                <List component='div' disablePadding>
                  {NotLoggedInUserMenu.map((item) => (
                      <ListItemLink button key={item.text} href={item.href} onClick = {handleSignOut} >
                        <ListItemText
                          primary={<Typography children={item.text} className={classes.sub} />}
                        />
                      </ListItemLink>
                  ))}
                </List>
              </Collapse>
            </div>
          }
          <Divider />
        </div>
      </Drawer>
    )
}

export default LeftDrawer
