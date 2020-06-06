import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import Router from './Router'

import './styles/global.scss'
import Backdrop from '@material-ui/core/Backdrop'
import CircularProgress from '@material-ui/core/CircularProgress'
import { makeStyles } from '@material-ui/core/styles'

import { usersCLL } from './lib/firebase'
import app from 'firebase/app'
import { UserProvider } from './context/UserContext'

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
}))

const App = () => {
  const [isLoad, setIsload] = useState(false)
  const history = useHistory()
  const [user, setUser] = useState(null)
  const classes = useStyles()
  useEffect(() => {
    app.auth().onAuthStateChanged((user) => {
      let redirect = ''
      if (user) {
        usersCLL
          .doc(user.uid)
          .get()
          .then((user) => {
            setUser(user.data())
            setIsload(true)
          })
        redirect = history.location.pathname
      } else {
        localStorage.removeItem('user')
        setIsload(true)
        redirect = '/sign_in'
      }

      history.push(redirect)
    })
  }, [history])

  return (
    <UserProvider value={{ user }}>
      {isLoad ? (
        <Router />
      ) : (
        <Backdrop className={classes.backdrop} open={true}>
          <CircularProgress color="inherit" />
        </Backdrop>
      )}
    </UserProvider>
  )
}

export default App
