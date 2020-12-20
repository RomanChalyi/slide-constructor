import React, { useState, useContext } from 'react'
import { Link as LinkR, useHistory } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import app from 'firebase/app'
import styled from 'styled-components'

import Link from '@material-ui/core/Link'
import { AppBar, Toolbar, Box, Switch, MenuItem, Menu, Grid, IconButton, Typography, Drawer } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import AccountCircle from '@material-ui/icons/AccountCircle'

import List from './List'
import i18n from '../../i18n'
import UserContext from '../../context/UserContext'

enum Languages {
  RU = 'ru',
  EN = 'en',
}

const Header = () => {
  const { t } = useTranslation()
  const history = useHistory()

  const [anchorEl, setAnchorEl] = useState(null)
  const [lang, setLang] = useState<Languages>(Languages.RU)
  const [openDrawer, setOpenDrawer] = useState<boolean>(false)
  const open = Boolean(anchorEl)

  const { user }: any = useContext(UserContext)

  const handleChange = () => {
    const newLang = lang === Languages.EN ? Languages.RU : Languages.EN
    i18n.changeLanguage(newLang)
    return setLang(newLang)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const toggleDrawer = (isOpen: boolean): (() => void) => () => {
    setOpenDrawer(isOpen)
    return
  }

  const handleMenu = (event: any) => {
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

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Grid container direction="row" justify="space-between" alignItems="center">
            <Grid item xs={12} sm={8}>
              <Grid container direction="row" justify="flex-start" alignItems="center">
                <IconMenu edge="start" color="inherit" aria-label="menu" onClick={toggleDrawer(true)}>
                  <MenuIcon />
                </IconMenu>
                <Title variant="h6">
                  <Link component={LinkR} to="/">
                    {t('Header.title')}
                  </Link>
                </Title>
              </Grid>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Grid container direction="row" justify="flex-end" alignItems="center">
                <Box>
                  <Grid container direction="row" justify="flex-end" alignItems="center">
                    <p>EN</p>
                    <Switch color="default" onClick={handleChange} />
                    <p>RU</p>
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
        <List toggleDrawer={toggleDrawer} />
      </Drawer>
    </>
  )
}
export default Header

const IconMenu = styled(IconButton)`
  margin-right: 15px;
`
const Title = styled(Typography)`
  color: white;
`
