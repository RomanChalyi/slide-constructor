import React from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

import { Container, Card, CardActions, CardContent, Button, Typography, Box } from '@material-ui/core'

const NoMatchPage = () => {
  const { t } = useTranslation()
  return (
    <Box className="content paddingTop">
      <Container maxWidth="sm">
        <Card>
          <CardContent>
            <Typography variant="h3" component="h1" gutterBottom>
              {t('404.title')}
            </Typography>
          </CardContent>
          <CardActions>
            <Button component={Link} to="/" variant="contained" color="primary">
              {t('404.link')}
            </Button>
          </CardActions>
        </Card>
      </Container>
    </Box>
  )
}

export default NoMatchPage
