import React from 'react';
import App from './App';
import { Router } from 'react-router-dom';
import i18n from './i18n';
import { createBrowserHistory } from 'history';
import { I18nextProvider } from 'react-i18next';
import { StickyContainer } from 'react-sticky';
import './styles/global.scss';

const customHistory = createBrowserHistory();
const Root = () => {
  return (
    <StickyContainer>
      <I18nextProvider i18n={i18n}>
        <Router history={customHistory}>
          <App />
        </Router>
      </I18nextProvider>
    </StickyContainer>
  );
};

export default Root;
