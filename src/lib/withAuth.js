import React from 'react'
import { Redirect } from 'react-router-dom'

export default function withAuth(AuthComponent) {
  const Authenticated = props => {
    return true ? <AuthComponent {...props} /> : <Redirect to="/sign_in" />
  }

  return Authenticated
}
