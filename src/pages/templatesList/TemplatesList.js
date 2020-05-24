import React from 'react';
import { Box, Container, Typography } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import SlideTemplate from '../../components/slideTemplate/SlideTemplate';
import { container, title, templatesContainer } from './templatesList.module.scss';

const slideTemplates = [
  { quantityLines: 2 },
  { quantityLines: 4, justify: 'center', alignItems: 'start' },
];

const TemplatesList = () => {
  const { t } = useTranslation();
  return (
    <Box className="paddingTop content">
      <Container className={container} maxWidth="md">
        <Typography className={title} color="textPrimary" align="center" variant="h4" gutterBottom>
          {t('TemplatesList.title')}
        </Typography>
        <Box className={templatesContainer}>
          {slideTemplates.map((template, index) => (
            <SlideTemplate
              key={index}
              quantityLines={template.quantityLines}
              justify={template.justify}
              alignItems={template.alignItems}
            />
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default TemplatesList;
