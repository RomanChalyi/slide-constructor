import React, { useState, useEffect, useContext } from 'react'
import { saveAs } from 'file-saver'
import UserContext from '../../context/UserContext'

import {
  Card,
  InputLabel,
  CardActions,
  CardContent,
  Button,
  Typography,
  Box,
  Container,
  TextField,
  FormControlLabel,
  Checkbox,
} from '@material-ui/core'
import { useTranslation } from 'react-i18next'
import { formContainer, formTitle } from './createSlideForm.module.scss'
import createSlides from '../../utils/createSlides'
import getFilename from '../../utils/getFilename'
import { storage, slidesCLL, slidesLwCLL } from '../../lib/firebase'

const CreateSlideForm = () => {
  const initValuesForm = { filename: '', defaultFilename: true, textSong: '', createEmptySlides: true }
  const { t } = useTranslation()
  const [form, setForm] = useState(initValuesForm)
  const { user } = useContext(UserContext)

  const handleChangeCheckbox = (e) => {
    const { name, checked } = e.target
    return setForm({ ...form, [name]: checked })
  }
  const handleChangeFilename = (e) => setForm({ ...form, filename: e.target.value })
  const handleChangeTextSong = (e) => setForm({ ...form, textSong: e.target.value })

  const handleCreate = () => {
    const { defaultFilename, textSong, filename, createEmptySlides } = form

    const name = getFilename(defaultFilename, textSong, filename)
    const slides = createSlides(textSong, createEmptySlides)
    if (user.role === 'admin') {
      storage.ref('slides_lw/' + name).put(slides)
      slidesLwCLL.doc(name).set({
        text: textSong,
        name: name,
      })
    } else {
      storage.ref('slides/' + name).put(slides)
      slidesCLL.doc(name).set({
        text: textSong,
        name: name,
      })
    }

    setForm(initValuesForm)
    saveAs(slides, name)
  }

  useEffect(() => {
    search()
  }, [])

  // TODO Search in another page
  const search = async () => {
    let a = slidesLwCLL
      .orderBy('name')
      .startAt('Братья')
      .endAt('Братья' + '~')
      .get()
    const [titleSnap] = await Promise.all([a])
    console.log(titleSnap.docs[0].data())
  }

  return (
    <Box className="content">
      <Container className={formContainer} maxWidth="sm">
        <Card>
          <CardContent>
            <InputLabel className={formTitle} htmlFor="form-title">
              {t('CreateForm.filename')}
              <Box component="span" color="error.main">
                *
              </Box>
            </InputLabel>
            <TextField
              onChange={handleChangeFilename}
              value={form.filename}
              disabled={form.defaultFilename}
              id="form-filename"
              fullWidth
              variant="outlined"
            />
            <FormControlLabel
              control={<Checkbox checked={form.defaultFilename} onChange={handleChangeCheckbox} name="defaultFilename" color="primary" />}
              label={t('CreateForm.label-filename')}
            />

            <Typography style={{ margin: '20px 0px 5px' }} color="textSecondary">
              {t('CreateForm.textSong')}
              <Box component="span" color="error.main">
                *
              </Box>
            </Typography>
            <TextField value={form.textSong} onChange={handleChangeTextSong} fullWidth id="form-textSong" multiline rows="13" variant="outlined" />
            <FormControlLabel
              control={<Checkbox checked={form.createEmptySlides} onChange={handleChangeCheckbox} name="createEmptySlides" color="primary" />}
              label={t('CreateForm.label-empty-slide')}
            />
          </CardContent>

          <CardActions style={{ display: 'flex', justifyContent: 'center' }}>
            <Button onClick={handleCreate} aria-label="create" size="small" variant="contained" color="primary">
              {t('CreateForm.create')}
            </Button>
          </CardActions>
        </Card>
      </Container>
    </Box>
  )
}
export default CreateSlideForm
