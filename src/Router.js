import React from 'react'
import { Route, Switch } from 'react-router-dom'
import CreateSlideForm from './pages/createSlideForm/createSlideForm'
import TemplatesList from './pages/templatesList/TemplatesList'
import NoMatchPage from './components/NoMatchPage'

const Router = () => (
  <Switch>
    <Route exact path="/" component={TemplatesList} />
    <Route exact path="/main" component={TemplatesList} />
    <Route exact path="/main/create/:type" component={CreateSlideForm} />
    <Route component={NoMatchPage} />
  </Switch>
)

export default Router
