import app from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCfy1HAH9yx3XKbdnMRT9u2kALv9JLZWJg",
  authDomain: "new-habit-11.firebaseapp.com",
  databaseURL: "https://new-habit-11.firebaseio.com",
  projectId: "new-habit-11",
  storageBucket: "",
  messagingSenderId: "608740080418",
  appId: "1:608740080418:web:39ae96b667ffae3d"
};

class Firebase {
  constructor() {
    app.initializeApp(firebaseConfig);

    this.auth = app.auth();
  }

  // **** Auth API ****

  doCreateUserWithEmailAndPassword = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);

  doSignInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);

  doSignOut = () => this.auth.signOut();
}

export default Firebase;
