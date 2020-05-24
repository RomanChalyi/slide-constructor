import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import i18n from '../../i18n';
import { useTranslation } from 'react-i18next';
import { AppBar, Toolbar, Box, Button, Switch, Typography } from '@material-ui/core';
import VideocamIcon from '@material-ui/icons/Videocam';
import { header, headerHandler } from './header.module.scss';

const Header = () => {
  const { t } = useTranslation();
  const [lang, setLang] = useState('en');
  const handleChange = () => {
    const newLang = lang === 'en' ? 'ru' : 'en';
    i18n.changeLanguage(newLang);
    return setLang(newLang);
  };
  return (
    <AppBar position="static">
      <Toolbar className={header}>
        <Box>
          <Button component={Link} to="/" variant="text" color="inherit">
            <VideocamIcon />
          </Button>
        </Box>
        <Typography align="center" variant="h6">
          {t('Header.title')}
        </Typography>
        <Box className={headerHandler}>
          <p>EN</p>
          <Switch color="default" onClick={handleChange} />
          <p>RUS</p>
        </Box>
      </Toolbar>
    </AppBar>
  );
};
export default Header;
