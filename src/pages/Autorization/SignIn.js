import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useFormik } from 'formik'

import { Button, TextField, Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import { signIn } from '../../lib/firebase'

const useStyles = makeStyles(() => ({
  input: {
    marginBottom: 10,
  },
}))

const validate = values => {
  const errors = {}
  if (!values.password) {
    errors.password = 'Required'
  } else if (values.password.length < 5) {
    errors.password = 'Must be not 5 less characters'
  }

  if (!values.email) {
    errors.email = 'Required'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address'
  }

  return errors
}

const SignIn = () => {
  const classes = useStyles()
  const history = useHistory()

  const formik = useFormik({
    initialValues: {
      password: '',
      email: '',
    },
    validate,
    onSubmit: values => {
      signIn(values.email, values.password)
        .then(data => {
          history.push('/')
        })
        .catch(error => alert(error.message))
    },
  })

  return (
    <form onSubmit={formik.handleSubmit}>
      <TextField
        fullWidth
        className={classes.input}
        name="email"
        error={!!formik.errors.email}
        value={formik.values.email}
        onChange={formik.handleChange}
        helperText={formik.errors.email && formik.errors.email}
        label="Email"
        type="email"
      />
      <TextField
        fullWidth
        className={classes.input}
        name="password"
        error={!!formik.errors.password}
        value={formik.values.password}
        onChange={formik.handleChange}
        helperText={formik.errors.email && formik.errors.password}
        label="Password"
        type="password"
      />
      <Grid container direction="row" justify="flex-end" alignItems="center">
        <Button type="submit" variant="contained" color="primary">
          Sign In
        </Button>
      </Grid>
    </form>
  )
}

export default SignIn
