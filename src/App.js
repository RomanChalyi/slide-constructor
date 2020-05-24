import React from 'react';
import Header from './components/header/Header';
import Router from './Router';
import Footer from './components/footer/Footer';
import './styles/global.scss';

const App = () => {
  return (
    <>
      <Header />
      <Router />
      <Footer />
    </>
  );
};

export default App
