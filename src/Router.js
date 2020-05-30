import React from 'react'
import { Route, Switch } from 'react-router-dom'
import CreateSlideForm from './pages/createSlideForm/CreateSlideForm'
import TemplatesList from './pages/templatesList/TemplatesList'
import NoMatchPage from './components/NoMatchPage'

import Autorization from './pages/Autorization/Autorization'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'

const RouterPageContent = () => (
  <Switch>
    <Route exact path="/" component={TemplatesList} />
    <Route exact path="/main" component={TemplatesList} />
    <Route exact path="/main/create" component={CreateSlideForm} />
    <Route component={NoMatchPage} />
  </Switch>
)

const Main = () => {
  return (
    <>
      <Header />
      <RouterPageContent />
      <Footer />
    </>
  )
}

const Router = () => (
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
)

export default Router
