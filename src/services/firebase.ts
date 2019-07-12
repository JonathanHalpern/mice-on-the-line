// ./src/services/firebase.js
import firebase from "firebase"
import "firebase/firestore"

const {
  FIREBASE_API_KEY,
  FIREBASE_AUTH_DOMAIN,
  FIREBASE_DATABASE_URL,
  FIREBASE_PROJECT_ID,
  FIREBASE_MESSAGING_SENDER_ID,
  FIREBASE_APP_ID,
} = process.env
const config = {
  apiKey: FIREBASE_API_KEY,
  authDomain: FIREBASE_AUTH_DOMAIN,
  databaseURL: FIREBASE_DATABASE_URL,
  projectId: FIREBASE_PROJECT_ID,
  // storageBucket: FIREBASE_STORAGE_BUCKET,
  messagingSenderId: FIREBASE_MESSAGING_SENDER_ID,
  appId: FIREBASE_APP_ID,
}

console.log(process.env, config)

var firebaseConfig = {
  apiKey: "AIzaSyC_pro4rWnk6q9XSzLDkhq-IePWUr_ZtTk",
  authDomain: "mice-on-the-line.firebaseapp.com",
  databaseURL: "https://mice-on-the-line.firebaseio.com",
  projectId: "mice-on-the-line",
  storageBucket: "",
  messagingSenderId: "1021052849729",
  appId: "1:1021052849729:web:6662efe156f4ee53",
}

class Firebase {
  constructor() {
    firebase.initializeApp(firebaseConfig)
    this.store = firebase.firestore()
    const settings = { /* your settings... */ timestampsInSnapshots: true }
    this.store.settings(settings)
    this.storage = firebase.storage
    this.auth = firebase.auth
  }
}

export default new Firebase()
