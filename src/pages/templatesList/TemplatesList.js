import React from 'react'
import { Box, Container, Typography } from '@material-ui/core'
import { useTranslation } from 'react-i18next'
import SlideTemplate from '../../components/slideTemplate/SlideTemplate'
import { container, title, templatesContainer } from './templatesList.module.scss'
import withAuth from '../../lib/withAuth'
import { SONG, PREACHING } from '../../constant'

const slideTemplates = [
  { type: SONG, quantityLines: 2 },
  { type: PREACHING, quantityLines: 4, justify: 'center', alignItems: 'start' },
]

const TemplatesList = () => {
  const { t } = useTranslation()
  return (
    <Box className="paddingTop content">
      <Container className={container} maxWidth="md">
        <Typography className={title} color="textPrimary" align="center" variant="h4" gutterBottom>
          {t('TemplatesList.title')}
        </Typography>
        <Box className={templatesContainer}>
          {slideTemplates.map((template, index) => (
            <SlideTemplate
              type={template.type}
              key={index}
              quantityLines={template.quantityLines}
              justify={template.justify}
              alignItems={template.alignItems}
            />
          ))}
        </Box>
      </Container>
    </Box>
  )
}

export default withAuth(TemplatesList)
