import React, { useState } from 'react';
import { saveAs } from 'file-saver';
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
} from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import { form, formTitle } from './createSlideForm.module.scss';
import createSlides from '../../utils/createSlides';
import getFilename from '../../utils/getFilename';

const CreateSlideForm = () => {
  const { t } = useTranslation();
  const [filename, setFilename] = useState('');
  const [disableFilename, setDisableFilename] = useState(true);
  const [textSong, setTextSong] = useState('');
  const [createEmptySlides, setCreateEmptySlides] = useState(true);

  const handleChangeCheckbox = (e) => setDisableFilename(e.target.checked);
  const handleChangeCheckbox2 = (e) => setCreateEmptySlides(e.target.checked);
  const handleChangeFilename = (e) => setFilename(e.target.value);
  const handleChangeTextSong = (e) => setTextSong(e.target.value);

  const handleCreate = () => {
    const name = getFilename(disableFilename, textSong, filename);
    const slides = createSlides(textSong, createEmptySlides);
    saveAs(slides, name);
  };

  return (
    <Box className="content">
      <Container className={form} maxWidth="sm">
        <Card>
          <CardContent>
            <InputLabel className={formTitle} htmlFor="event-title">
              {t('CreateForm.filename')}
              <Box component="span" color="error.main">
                *
              </Box>
            </InputLabel>
            <TextField
              onChange={handleChangeFilename}
              value={filename}
              disabled={disableFilename}
              id="form-title"
              fullWidth
              variant="outlined"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={disableFilename}
                  onChange={handleChangeCheckbox}
                  name="checkedB"
                  color="primary"
                />
              }
              label={t('CreateForm.label-filename')}
            />

            <Typography style={{ margin: '20px 0px 5px' }} color="textSecondary">
              {t('CreateForm.text')}
              <Box component="span" color="error.main">
                *
              </Box>
            </Typography>
            <TextField
              value={textSong}
              onChange={handleChangeTextSong}
              fullWidth
              id="form-description"
              multiline
              rows="13"
              variant="outlined"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={createEmptySlides}
                  onChange={handleChangeCheckbox2}
                  name="checkedB"
                  color="primary"
                />
              }
              label={t('CreateForm.label-empty-slide')}
            />
          </CardContent>

          <CardActions style={{ display: 'flex', justifyContent: 'center' }}>
            <Button
              onClick={handleCreate}
              aria-label="create"
              size="small"
              variant="contained"
              color="primary"
            >
              {t('CreateForm.create')}
            </Button>
          </CardActions>
        </Card>
      </Container>
    </Box>
  );
};
export default CreateSlideForm;
