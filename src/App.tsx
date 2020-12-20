import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'
import app from 'firebase/app'

import Backdrop from '@material-ui/core/Backdrop'
import CircularProgress from '@material-ui/core/CircularProgress'

import Router from './Router'
import { usersCLL } from './lib/firebase'
import { UserProvider } from './context/UserContext'

const App = () => {
  const history = useHistory()

  const [isLoad, setIsload] = useState<boolean>(false)
  const [user, setUser] = useState(null)

  useEffect(() => {
    app.auth().onAuthStateChanged((user) => {
      let redirect = ''
      if (user) {
        usersCLL
          .doc(user.uid)
          .get() //TODO add type
          .then((user: any) => {
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
        <StyledBackdrop open>
          <CircularProgress color="inherit" />
        </StyledBackdrop>
      )}
    </UserProvider>
  )
}

export default App

const StyledBackdrop = styled(Backdrop)`
z-index: 5,
color: #fff,
`
