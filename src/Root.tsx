import React from 'react'
import { Router } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import { I18nextProvider } from 'react-i18next'

import { ThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'

import App from './App'
import i18n from './i18n'
import theme from './lib/theme'

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
