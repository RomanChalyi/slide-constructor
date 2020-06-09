import React from 'react'
import App from './App'
import { Router } from 'react-router-dom'
import i18n from './i18n'
import { createBrowserHistory } from 'history'
import { I18nextProvider } from 'react-i18next'
import { ThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import theme from './lib/theme'

import './styles/global.scss'

const customHistory = createBrowserHistory()
const Root = () => {
  return (
    <I18nextProvider i18n={i18n}>
      <Router history={customHistory}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <App />
        </ThemeProvider>
      </Router>
    </I18nextProvider>
  )
}

export default Root
