import React, { useState } from 'react'
import { saveAs } from 'file-saver'
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

const CreateSlideForm = () => {
  const { t } = useTranslation()
  const [form, setForm] = useState({ filename: '', defaultFilename: true, textSong: '', createEmptySlides: true })

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
    saveAs(slides, name)
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
            <TextField value={form.song} onChange={handleChangeTextSong} fullWidth id="form-textSong" multiline rows="13" variant="outlined" />
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
