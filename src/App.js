import React, { useEffect, useState } from 'react'
import { Redirect } from 'react-router-dom'
import Router from './Router'

import './styles/global.scss'

import app from 'firebase/app'

const App = () => {
  const [isLoad, setIsload] = useState(false)
  const [redirect, setRedirect] = useState(false)

  useEffect(() => {
    app.auth().onAuthStateChanged(user => {
      let redirect = ''
      if (user) {
        localStorage.setItem('auth', 'in')
        redirect = '/main'
      } else {
        localStorage.setItem('auth', 'out')
        redirect = '/sign_in'
      }
      setIsload(true)
      setRedirect(redirect)
    })
  }, [])

  return (
    <>
      {redirect && <Redirect to={redirect} />}
      {isLoad ? <Router /> : <h1>Loading....</h1>}
    </>
  )
}

export default App
