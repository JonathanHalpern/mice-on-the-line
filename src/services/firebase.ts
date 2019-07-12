// ./src/services/firebase.js
import firebase from "firebase"
import "firebase/firestore"

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  // storageBucket: FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
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
