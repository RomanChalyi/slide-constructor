import React, { useState } from 'react'

import { signUp, usersDB } from '../../lib/firebase'

const SignUp = () => {
  //   const [state, setState] = useState({ email: '', password: '', errorMessage: null })

  //   handleSignUp = () => {
  //     // TODO: Firebase stuff...
  //     signUp(state.email, state.password)
  //       .then(data => {
  //         usersDB.doc(data.user.uid).set({
  //           uid: data.user.uid,
  //           email: state.email,
  //           role: 'user',
  //           articles: [],
  //         })
  //         history.push('/main/home')
  //       })
  //       .catch(error => setState({ ...state, errorMessage: error.message }))
  //   }

  return <div>SignUP</div>
}

export default SignUp
