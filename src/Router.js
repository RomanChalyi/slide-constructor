import React from 'react'
import { Route, Switch } from 'react-router-dom'
import CreateSlideForm from './pages/createSlideForm/CreateSlideForm'
import TemplatesList from './pages/templatesList/TemplatesList'
import NoMatchPage from './components/NoMatchPage'
import { StickyContainer, Sticky } from 'react-sticky'
import Autorization from './pages/Autorization/Autorization'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import Collections from './pages/Collections'

const RouterPageContent = () => (
  <Switch>
    <Route exact path="/" component={TemplatesList} />
    <Route exact path="/main" component={TemplatesList} />
    <Route exact path="/main/create/:type" component={CreateSlideForm} />
    <Route exact path="/main/collections" component={Collections} />
    <Route component={NoMatchPage} />
  </Switch>
)

const Main = () => {
  return (
    <>
      <StickyContainer>
        <Sticky topOffset={0}>
          {({ style }) => (
            <div style={style}>
              <Header />
            </div>
          )}
        </Sticky>
        <RouterPageContent />
        <Footer />
      </StickyContainer>
    </>
  )
}

const Router = () => (
  <>
    <Switch>
      <Route exact paths={['/', '/main']} component={Main} />
      <Route exact path="/sign_in" component={Autorization} />
    </Switch>
  </>
)

export default Router
