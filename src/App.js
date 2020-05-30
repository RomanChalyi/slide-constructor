import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import Router from './Router'

import './styles/global.scss'
import { usersDB } from './lib/firebase'
import app from 'firebase/app'

const App = () => {
  const [isLoad, setIsload] = useState(false)
  const history = useHistory()
  useEffect(() => {
    app.auth().onAuthStateChanged(user => {
      let redirect = ''
      if (user) {
        usersDB
          .doc(user.uid)
          .get()
          .then(user => localStorage.setItem('user', JSON.stringify(user.data())))
        redirect = history.location.pathname
      } else {
        localStorage.removeItem('user')
        redirect = '/sign_in'
      }
      setIsload(true)
      history.push(redirect)
    })
  }, [history])

  return <>{isLoad ? <Router /> : <h1>Loading....</h1>}</>
}

export default App
