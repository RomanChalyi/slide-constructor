import React from 'react';
import App from './App';
import { Router } from 'react-router-dom';
import i18n from './i18n';
import { createBrowserHistory } from 'history';
import { I18nextProvider } from 'react-i18next';
import './styles/global.scss';

const customHistory = createBrowserHistory();
const Root = () => {
  return (
    <I18nextProvider i18n={i18n}>
      <Router history={customHistory}>
        <App />
      </Router>
    </I18nextProvider>
  );
};

export default Root;
