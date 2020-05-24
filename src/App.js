import React, { useEffect, useState } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'

import Header from './components/header/Header'
import Router from './Router'
import Footer from './components/footer/Footer'
import Autorization from './pages/Autorization/Autorization'
import './styles/global.scss'

import { signIn } from './lib/firebase'
import app from 'firebase/app'

const Main = () => {
  return (
    <>
      <Header />
      <Router />
      <Footer />
    </>
  )
}

const App = () => {
  const [isLoad, setIsload] = useState(false)
  const [redirect, setRedirect] = useState(false)

  // useEffect(() => {
  //   signIn('senyaq@gmail.com', '486279153')
  //     .then(() => alert('login'))
  //     .catch((error) => console.log(error.message))
  // }, [])

  // useEffect(() => {
  //   app
  //     .auth()
  //     .signOut()
  //     .then(
  //       () => {
  //         console.log('Signed Out')
  //       },
  //       (error) => {
  //         console.error('Sign Out Error', error)
  //       }
  //     )
  // }, [])

  useEffect(() => {
    app.auth().onAuthStateChanged((user) => {
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
      {isLoad ? (
        <>
          <Switch>
            <Route exact path="/" component={Main} />
            <Route path="/main" component={Main} />
          </Switch>
          <Switch>
            <Route exact path="/sign_in" component={Autorization} />
            <Route path="/sign_in" component={Autorization} />
          </Switch>
        </>
      ) : (
        <h1>Loading....</h1>
      )}
    </>
  )
}

export default App
