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
  Slider,
} from '@material-ui/core'
import { useTranslation } from 'react-i18next'
import { formContainer, formTitle } from './createSlideForm.module.scss'
import createPresentation from '../../utils/slideConstructor'
import { getDefaultSetting, getFilename } from '../../utils'
import { SONG } from '../../constant'

const CreateSlideForm = ({ location }) => {
  const { t } = useTranslation()
  const [form, setForm] = useState(getDefaultSetting(location))

  const handleChangeCheckbox = (e) => {
    const { name, checked } = e.target
    return setForm({ ...form, [name]: checked })
  }
  const handleDefaultName = (e) => {
    if (e.target.checked) {
      return setForm({ ...form, name: getFilename(form.content), defaultName: true })
    }
    return setForm({ ...form, name: '', defaultName: false })
  }

  const handleChangeName = (e) => setForm({ ...form, name: e.target.value })
  const handlePresentationContent = (e) => {
    if (form.defaultName) {
      return setForm({ ...form, content: e.target.value, name: getFilename(e.target.value) })
    }

    return setForm({ ...form, content: e.target.value })
  }

  const handleChangeLineOnSlide = (e, value) => setForm({ ...form, linesOnSlide: value })

  const handleCreate = () => {
    const presentation = createPresentation(form)
    const fileName = `${form.name}.xml`
    saveAs(presentation, fileName)
  }

  return (
    <Box className="content">
      <Container className={formContainer} maxWidth="sm">
        <Card>
          <CardContent>
            <InputLabel className={formTitle} htmlFor="form-title">
              {t('CreateForm.name')}
              <Box component="span" color="error.main">
                *
              </Box>
            </InputLabel>
            <TextField onChange={handleChangeName} value={form.name} disabled={form.defaultName} id="form-name" fullWidth variant="outlined" />
            <FormControlLabel
              control={<Checkbox checked={form.defaultName} onChange={handleDefaultName} name="defaultName" color="primary" />}
              label={t('CreateForm.defaultName')}
            />

            <Typography style={{ margin: '20px 0px 5px' }} color="textSecondary">
              {t('CreateForm.content')}
              <Box component="span" color="error.main">
                *
              </Box>
            </Typography>
            <TextField value={form.content} onChange={handlePresentationContent} fullWidth multiline rows="13" variant="outlined" />
            <FormControlLabel
              control={<Checkbox checked={form.blankBeginningAndEnd} onChange={handleChangeCheckbox} name="blankBeginningAndEnd" color="primary" />}
              label={t('CreateForm.blankBeginningAndEnd')}
            />
            <FormControlLabel
              control={<Checkbox checked={form.blankBesideSlide} onChange={handleChangeCheckbox} name="blankBesideSlide" color="primary" />}
              label={t('CreateForm.blankBesideSlide')}
            />
            {form.type === SONG && (
              <>
                <Typography id="discrete-slider" gutterBottom>
                  {t('CreateForm.numberOfLines')}
                </Typography>
                <Slider
                  value={form.linesOnSlide}
                  onChange={handleChangeLineOnSlide}
                  aria-labelledby="discrete-slider"
                  valueLabelDisplay="auto"
                  step={1}
                  marks
                  min={1}
                  max={10}
                />
              </>
            )}
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
