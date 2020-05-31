import app from 'firebase/app'
import 'firebase/auth'
import '@firebase/firestore'
import 'firebase/storage'

const config = {
  apiKey: 'AIzaSyAUVujq70Urk4aHEsFFm7RIVnIJxp8NaEE',
  authDomain: 'slide-creator-d1df7.firebaseapp.com',
  databaseURL: 'https://slide-creator-d1df7.firebaseio.com',
  projectId: 'slide-creator-d1df7',
  storageBucket: 'slide-creator-d1df7.appspot.com',
  messagingSenderId: '651226810126',
  appId: '1:651226810126:web:550bfe885092931e9fb95f',
  measurementId: 'G-SSNRZQKGWK',
}

// Initialize Firebase
app.initializeApp(config)

let auth = app.auth()
let db = app.firestore()
let usersCLL = db.collection('users')
let slidesCLL = db.collection('slides')
let slidesLwCLL = db.collection('slides_lw')
let storage = app.storage()

const onAuthStateChanged = () => null

const signIn = (email, password) => auth.signInWithEmailAndPassword(email, password)

const signUp = (email, password) => auth.createUserWithEmailAndPassword(email, password)

export { onAuthStateChanged, signUp, signIn, usersCLL, storage, slidesCLL, slidesLwCLL }

//UPDATE one
// usersCLL.doc('mario').update({
//   outfitColor: 'red',
// })

//SET one
// usersCLL.doc('mario').set({
//   employment: 'plumber',
//   outfitColor: 'green',
//   specialAttack: 'fireball',
// })

//GET all
// usersCLL.get().then(querySnapshot => {
//   const arrUsers = []
//   querySnapshot.docs.map(function(documentSnapshot) {
//     !documentSnapshot.data().test && arrUsers.push(documentSnapshot.data())
//   })
//   console.log('arrUsers', arrUsers)
// })

//GET from id
// usersCLL
//   .doc('mario')
//   .get()
//   .then(user => console.log('user', user.data()))
