import React, { useState, useEffect, useContext } from 'react'
import { saveAs } from 'file-saver'
import styled from 'styled-components'

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
  Slider,
} from '@material-ui/core'
import { useTranslation } from 'react-i18next'

import createPresentation from '../../utils/slideConstructor'
import { getDefaultSetting, getFilename } from '../../utils'
import { storage, slidesCLL, slidesLwCLL } from '../../lib/firebase'
import { SONG } from '../../constant'

const CreateSlideForm = ({ location }: any) => {
  const { t } = useTranslation()
  const [form, setForm] = useState(getDefaultSetting(location))

  const { user }: any = useContext(UserContext)
  const handleChangeCheckbox = (e: any) => {
    const { name, checked } = e.target
    return setForm({ ...form, [name]: checked })
  }
  const handleDefaultName = (e: any) => {
    if (e.target.checked) {
      return setForm({ ...form, name: getFilename(form.content), defaultName: true })
    }
    return setForm({ ...form, name: '', defaultName: false })
  }

  const handleChangeName = (e: any) => setForm({ ...form, name: e.target.value })
  const handlePresentationContent = (e: any) => {
    if (form.defaultName) {
      return setForm({ ...form, content: e.target.value, name: getFilename(e.target.value) })
    }

    return setForm({ ...form, content: e.target.value })
  }

  const handleChangeLineOnSlide = (e: any, value: any): void => setForm({ ...form, linesOnSlide: value })

  const handleCreate = () => {
    const presentation = createPresentation(form)
    const fileName = `${form.name}.xml`

    saveAs(presentation, fileName)
    if (user.role === 'admin') {
      storage.ref('slides_lw/' + fileName).put(presentation)
      slidesLwCLL.doc(form.name).set({
        text: form.content,
        name: form.name,
      })
    } else {
      storage.ref('slides/' + form.name).put(presentation)
      slidesCLL.doc(form.name).set({
        text: form.content,
        name: form.name,
      })
    }

    setForm(getDefaultSetting(location))
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
  }

  return (
    <Wrapper>
      <FormContainer maxWidth="sm">
        <Card>
          <CardContent>
            <Title htmlFor="form-title">
              {t('CreateForm.name')}
              <Box component="span" color="error.main">
                *
              </Box>
            </Title>
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
      </FormContainer>
    </Wrapper>
  )
}
export default CreateSlideForm

const Wrapper = styled(Box)`
  min-height: 100vh;
`
const FormContainer = styled(Container)`
  height: 60vh;
  padding-top: 60px;
`
const Title = styled(InputLabel)`
  margin: 30px 0 5px;
`
