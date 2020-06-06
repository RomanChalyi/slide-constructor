import React, { useContext, useEffect, useState } from 'react'

import { Paper, Box, Container, Typography, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import ExpansionPanel from '@material-ui/core/ExpansionPanel'
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary'
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'

import { slidesCLL, slidesLwCLL } from '../../lib/firebase'
import UserContext from '../../context/UserContext'
import { firestore } from 'firebase'

const useStyles = makeStyles((theme) => ({
  root: {
    height: '60vh',
    paddingTop: 60,
  },
  accordion: {
    width: '100%',
  },
  paper: {
    padding: '30px 20px',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
  card: {
    maxWidth: 275,
    marginRight: 15,
    paddingBottom: 25,
    position: 'relative',
  },
  card_btn: {
    position: 'absolute',
    bottom: 5,
  },
}))

const Collections = () => {
  const classes = useStyles()
  const { user } = useContext(UserContext)
  const [songsLW, setSongsLW] = useState([])
  const [last, setLast] = useState('')

  useEffect(() => {
    songsLW.length === 0 &&
      slidesLwCLL
        .limit(2)
        .get()
        .then((querySnapshots) => {
          const songsNew = querySnapshots.docs.map((documentSnapshot) => documentSnapshot.data())
          setSongsLW(songsNew)
          setLast(songsNew[songsNew.length - 1].name)
        })
  })

  const nextSongs = () => {
    slidesLwCLL
      .orderBy('name')
      .startAfter(last)
      .limit(2)
      .get()
      .then((querySnapshots) => {
        const songsNew = querySnapshots.docs.map((documentSnapshot) => documentSnapshot.data())
        setSongsLW([...songsLW, ...songsNew])
        songsNew[songsNew.length - 1] && setLast(songsNew[songsNew.length - 1].name)
      })
  }

  const sliceText = (text) => (text.length > 200 ? `${text.slice(0, 100)} ...` : text)

  console.log('songsLW', songsLW)
  return (
    <Box className="content">
      <Container className={classes.root} maxWidth="md">
        <Paper className={classes.paper}>
          <Typography variant="h4" component="h1" gutterBottom>
            Collections
          </Typography>
          <button onClick={nextSongs}>next</button>
          <div className={classes.accordion}>
            {user.role === 'admin' && (
              <ExpansionPanel>
                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
                  <Typography className={classes.heading}>Collections songs "Living Word"</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                  {songsLW.length > 0 &&
                    songsLW.map((item) => (
                      <Card className={classes.card} key={item.name}>
                        <CardContent>
                          <Typography variant="h6" component="h2">
                            {item.name}
                          </Typography>
                          <Typography variant="body2" component="p">
                            {sliceText(item.text)}
                          </Typography>
                        </CardContent>
                        <CardActions>
                          <Button className={classes.card_btn} size="small">
                            Download
                          </Button>
                        </CardActions>
                      </Card>
                    ))}
                </ExpansionPanelDetails>
              </ExpansionPanel>
            )}
            <ExpansionPanel>
              <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel2a-content" id="panel2a-header">
                <Typography className={classes.heading}>Collections songs</Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
                </Typography>
              </ExpansionPanelDetails>
            </ExpansionPanel>
          </div>
        </Paper>
      </Container>
    </Box>
  )
}

export default Collections
