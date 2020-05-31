import React, { useState, useEffect } from 'react'
import i18n from '../../i18n'
import clsx from 'clsx'

import { Link, useHistory } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

import { makeStyles } from '@material-ui/core/styles'
import {
  AppBar,
  Toolbar,
  Box,
  Switch,
  MenuItem,
  Menu,
  Grid,
  IconButton,
  Typography,
  Drawer,
  List,
  Divider,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import InboxIcon from '@material-ui/icons/MoveToInbox'
import MailIcon from '@material-ui/icons/Mail'
import AccountCircle from '@material-ui/icons/AccountCircle'

import app from 'firebase/app'

const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    color: 'white',
  },
}))

const Header = () => {
  const classes = useStyles()
  const { t } = useTranslation()
  const [anchorEl, setAnchorEl] = useState(null)
  const [lang, setLang] = useState('en')
  const [openDrawer, setOpenDrawer] = useState(false)
  const open = Boolean(anchorEl)
  const history = useHistory()
  const [user, setUser] = useState(null)

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'))
    setUser(user)
  }, [])

  const handleChange = () => {
    const newLang = lang === 'en' ? 'ru' : 'en'
    i18n.changeLanguage(newLang)
    return setLang(newLang)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return
    }

    setOpenDrawer(open)
  }

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const logOutHandler = () => {
    app
      .auth()
      .signOut()
      .then(
        () => {
          console.log('Signed Out')
          localStorage.removeItem('user')
          history.push('/sign_in')
        },
        (error) => {
          console.error('Sign Out Error', error)
        }
      )
  }

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top',
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  )

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Grid container direction="row" justify="space-between" alignItems="center">
            <Grid item xs={12} sm={8}>
              <Grid container direction="row" justify="flex-start" alignItems="center">
                <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick={toggleDrawer(true)}>
                  <MenuIcon />
                </IconButton>
                <Typography component={Link} to="/" variant="h6" className={classes.title}>
                  {t('Header.title')}
                </Typography>
              </Grid>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Grid container direction="row" justify="flex-end" alignItems="center">
                <Box>
                  <Grid container direction="row" justify="flex-end" alignItems="center">
                    <p>EN</p>
                    <Switch color="default" onClick={handleChange} />
                    <p>RUS</p>
                  </Grid>
                </Box>
                <IconButton
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  color="inherit"
                  onClick={handleMenu}
                >
                  <AccountCircle />
                </IconButton>
                {user && user.role === 'admin' && <p>LW Team</p>}
              </Grid>

              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={open}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
                <MenuItem onClick={logOutHandler}>Log out</MenuItem>
              </Menu>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <Drawer anchor="left" open={openDrawer} onClose={toggleDrawer(false)}>
        {list('left')}
      </Drawer>
    </>
  )
}
export default Header
