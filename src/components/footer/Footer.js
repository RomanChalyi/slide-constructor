import React from 'react';
import { useTranslation } from 'react-i18next';
import { Typography, Box } from '@material-ui/core';
import { footer, footerText } from './footer.module.scss';

const Footer = () => {
  const { t } = useTranslation();
  return (
    <Box className={footer}>
      <Typography variant="h6" className={footerText}>
        {t('Footer.version')}
      </Typography>
    </Box>
  );
};
export default Footer;
