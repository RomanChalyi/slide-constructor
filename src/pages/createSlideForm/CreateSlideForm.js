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
import { SONG } from '../../constant'

const CreateSlideForm = () => {
  const { t } = useTranslation()
  const [form, setForm] = useState({ name: '', useDefaultName: true, presentationContent: '', createEmptySlides: true, type: SONG })

  const handleChangeCheckbox = (e) => {
    const { name, checked } = e.target
    return setForm({ ...form, [name]: checked })
  }
  const handleDefaultName = (e) => {
    if (e.target.checked) {
      return setForm({ ...form, name: getFilename(form.presentationContent), useDefaultName: true })
    }
    return setForm({ ...form, name: '', useDefaultName: false })
  }

  const handleChangeFilename = (e) => setForm({ ...form, name: e.target.value })
  const handlePresentationContent = (e) => setForm({ ...form, presentationContent: e.target.value })

  const handleCreate = () => {
    const { useDefaultName, presentationContent, name, createEmptySlides } = form

    // const name = getFilename(useDefaultName, presentationContent, name)
    const slides = createSlides(presentationContent, createEmptySlides, form)
    // saveAs(slides, name)
  }

  return (
    <Box className="content">
      {/* <Container className={formContainer} maxWidth="sm">
        <Card>
          <CardContent>
            <InputLabel className={formTitle} htmlFor="form-title">
              {t('CreateForm.name')}
              <Box component="span" color="error.main">
                *
              </Box>
            </InputLabel>
            <TextField onChange={handleChangeFilename} value={form.name} disabled={form.useDefaultName} id="form-name" fullWidth variant="outlined" />
            <FormControlLabel
              control={<Checkbox checked={form.useDefaultName} onChange={handleDefaultName} name="useDefaultName" color="primary" />}
              label={t('CreateForm.label-name')}
            />

            <Typography style={{ margin: '20px 0px 5px' }} color="textSecondary">
              {t('CreateForm.presentationContent')}
              <Box component="span" color="error.main">
                *
              </Box>
            </Typography>
            <TextField
              value={form.song}
              onChange={handlePresentationContent}
              fullWidth
              id="form-presentationContent"
              multiline
              rows="13"
              variant="outlined"
            />
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
      </Container> */}
    </Box>
  )
}
export default CreateSlideForm
