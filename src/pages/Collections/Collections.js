import React from 'react'

import { Paper, Box, Container, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() => ({
  root: {
    height: '60vh',
    paddingTop: 60,
  },
  paper: {
    padding: '30px 20px',
  },
}))

const Collections = () => {
  const classes = useStyles()
  return (
    <Box className="content">
      <Container className={classes.root} maxWidth="md">
        <Paper className={classes.paper}>
          <Typography variant="h4" component="h1" gutterBottom>
            Collections
          </Typography>
        </Paper>
      </Container>
    </Box>
  )
}

export default Collections
