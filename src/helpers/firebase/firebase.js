import app from 'firebase/app';
import 'firebase/messaging';
import 'firebase/database';
// import config from 'src/constants/configAPI';

// const {
//   FIREBASE_API_KEY,
//   FIREBASE_SENDER_ID
// } = config;

const configFirebase = {
  apiKey: 'AIzaSyBFWmEi2raK-sJ3v9ZCQOpBDB1smOgDW98',
  messagingSenderId: '429364986528'
};

var firebaseConfig = {
  apiKey: "AIzaSyDvA_xq-ApmWpB5DjrrEfgXDI7cIse002U",
  authDomain: "gsdadt-8885d.firebaseapp.com",
  databaseURL: "https://gsdadt-8885d.firebaseio.com",
  projectId: "gsdadt-8885d",
  storageBucket: "gsdadt-8885d.appspot.com",
  messagingSenderId: "454485563889",
  appId: "1:454485563889:web:2acad0a3fd168ec8160c50",
  measurementId: "G-Z3PSC2CY4J"
};

class Firebase {
  constructor() {
    app.initializeApp(firebaseConfig);
    this.auth = app.auth();
    this.database = app.database();
    this.messaging = app.messaging();
    const db = this.database;
    db.ref("gshtdt-8885d").once("value", function(snap) {
      // success method is not called
      console.log(snap.val());
      
    }, function(err) {
      // error callback triggered with PERMISSION_DENIED
    });
  }

  doCreateUserWithEmailAndPassword = (email, password) => {
    return this.auth.createUserWithEmailAndPassword(email, password);
  }

  doSignInWithEmailAndPassword = (email, password) => {
    return this.auth.signInWithEmailAndPassword(email, password);
  }

  doSignOut = () => {
    return this.auth.signOut();
  }

  doPasswordReset = email => {
    return this.auth.sendPasswordResetEmail(email);
  }

  doPasswordUpdate = password => {
    return this.auth.currentUser.updatePassword(password);
  }

  user = uid => this.database.ref(`gshtdt-5114e/${uid}`);

  users = () => this.database.ref('gsdadt-8885d');
  // requestToken = (callback) => {
  //   this.messaging.requestPermission().then(() => this.messaging.getToken()).then((currentToken) => {
  //     if (callback) callback(currentToken);
  //   }).catch((err) => {

  //   });
  // }

  // onMessage = (callback) => {
  //   this.messaging.onMessage((res) => {
  //     if (callback) {
  //       callback(res);
  //     }
  //   });
  // }
}
export default Firebase;
