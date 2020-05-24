import React from 'react'
import { StickyContainer, Sticky } from 'react-sticky'

import Header from './components/header/Header'
import Router from './Router'
import Footer from './components/footer/Footer'
import './styles/global.scss'

const App = () => {
  return (
    <StickyContainer>
      <Sticky topOffset={0}>
        {({ style }) => (
          <div style={style}>
            <Header />
          </div>
        )}
      </Sticky>
      <Router />
      <Footer />
    </StickyContainer>
  )
}

export default App
