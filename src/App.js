import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import Router from './Router'

import './styles/global.scss'
import { usersCLL } from './lib/firebase'
import app from 'firebase/app'
import { UserProvider } from './context/UserContext'

const App = () => {
  const [isLoad, setIsload] = useState(false)
  const history = useHistory()
  const [user, setUser] = useState(null)

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

  return <UserProvider value={{ user }}>{isLoad ? <Router /> : <h1>Loading....</h1>}</UserProvider>
}

export default App
