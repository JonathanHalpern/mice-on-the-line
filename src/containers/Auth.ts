import React from "react"
import PropTypes from "prop-types"

interface SignIn {
  email: string
  password: string
}

const INITIAL_STATE = {
  uid: "",
  isAnonymous: null,
  // // some other properties from the user object that may be useful
  email: "",
  displayName: "",
  photoURL: "",
}

class Auth extends React.Component {
  static propTypes = {
    children: PropTypes.func.isRequired,
  }

  static contextTypes = {
    firebase: PropTypes.object,
  }

  state = INITIAL_STATE

  componentDidMount() {
    const { auth } = this.context.firebase
    // onAuthStateChanged returns an unsubscribe method
    this.stopAuthListener = auth().onAuthStateChanged(user => {
      if (user) {
        this.signIn(user)
      } else {
        // otherwise sign-out!
        this.signOut()
      }
    })
  }

  componentWillUnmount() {
    this.stopAuthListener()
  }

  handleSignIn = ({ email, password }: SignIn) => {
    const { auth } = this.context.firebase

    return auth().signInWithEmailAndPassword(email, password)
  }

  handleSignOut = () => {
    const { auth } = this.context.firebase

    return auth().signOut()
  }

  signIn(user) {
    const { uid, isAnonymous, email, displayName, photoURL } = user

    this.setState({
      uid,
      isAnonymous,
      email,
      displayName,
      photoURL,
    })
  }

  signOut() {
    this.setState(INITIAL_STATE)
  }

  render() {
    // If uid doesn't exist in state, the user is not signed in.
    // A uid will exist if the user is signed in anonymously.
    // We'll consider anonymous users as unauthed for this variable.
    const isAuthed = !!(this.state.uid && !this.state.isAnonymous)

    return this.props.children({
      ...this.state,
      signIn: this.handleSignIn,
      signOut: this.handleSignOut,
      isAuthed,
    })
  }
}

export default Auth
